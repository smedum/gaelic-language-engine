import React, { useState, useRef } from 'react';
import { Volume2, Mic, Upload } from 'lucide-react';

const GaelicSoundLibrary = () => {
  const [selectedTab, setSelectedTab] = useState('consonants');
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [selectedSound, setSelectedSound] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const consonants = [
    { sound: 'p', ipa: 'p', emoji: '🟦👄🤐', action: 'Lips together, stop air', example: 'pòg', meaning: 'kiss' },
    { sound: 'b', ipa: 'b', emoji: '🟦👄🤐🔊', action: 'Lips together, stop air, voiced', example: 'bàta', meaning: 'boat' },
    { sound: 't', ipa: 't', emoji: '🟥👅🦷🤐', action: 'Tongue to teeth/ridge, stop', example: 'tè', meaning: 'tea' },
    { sound: 'd', ipa: 'd', emoji: '🟥👅🦷🤐🔊', action: 'Tongue to teeth/ridge, stop, voiced', example: 'doras', meaning: 'door' },
    { sound: 'k', ipa: 'k', emoji: '🟥👅⬅️🤐', action: 'Tongue back, stop', example: 'cat', meaning: 'cat' },
    { sound: 'g', ipa: 'g', emoji: '🟥👅⬅️🤐🔊', action: 'Tongue back, stop, voiced', example: 'gorm', meaning: 'blue' },
    { sound: 'ch', ipa: 'x', emoji: '🟥👅⬅️😬💨', action: 'Tongue back, create friction', example: 'loch', meaning: 'lake' },
    { sound: 'm', ipa: 'm', emoji: '🟦👄🤐🔊👃', action: 'Lips together, through nose', example: 'màthair', meaning: 'mother' },
    { sound: 'n', ipa: 'n', emoji: '🟥👅🦷🤐🔊👃', action: 'Tongue to ridge, through nose', example: 'nighean', meaning: 'girl' },
    { sound: 'l', ipa: 'l', emoji: '🟥👅🦷🔊➡️', action: 'Tongue to ridge, air around sides', example: 'làmh', meaning: 'hand' },
    { sound: 'r', ipa: 'r', emoji: '🟥👅💨🌀', action: 'Tongue tip vibrating', example: 'ruadh', meaning: 'red' },
  ];

  const vowels = [
    { sound: 'a', ipa: 'a', emoji: '🟡😮⬇️👅➡️', action: 'Open, tongue forward', ref: 'Like "cat"', example: 'cat', meaning: 'cat' },
    { sound: 'e', ipa: 'ɛ', emoji: '🟢😐👅➡️', action: 'Mid-open, tongue forward', ref: 'Like "bed"', example: 'eun', meaning: 'bird' },
    { sound: 'i', ipa: 'i', emoji: '🔵😊👅➡️🔼', action: 'Close, tongue high front', ref: 'Like "machine"', example: 'fìor', meaning: 'true' },
    { sound: 'o', ipa: 'ɔ', emoji: '🟠😮👅⬅️🔽', action: 'Open-mid, tongue back', ref: 'Like "got"', example: 'òr', meaning: 'gold' },
    { sound: 'u', ipa: 'u', emoji: '🟣😗👅⬅️🔼', action: 'Close, tongue back high', ref: 'Like "goose"', example: 'ugh', meaning: 'egg' },
  ];

  const phrases = [
    {
      gaelic: 'tog e gu bog e ach tog e',
      meaning: 'Take it easy, but take it',
      breakdown: [
        { word: 'tog', sounds: 't-o-g', emoji: '🟥👅🦷🤐 🟠😮👅⬅️🔽 🟥👅⬅️🤐🔊', approx: 'tohk' },
        { word: 'e', sounds: 'e', emoji: '🟢😐👅➡️', approx: 'eh' },
        { word: 'gu', sounds: 'g-u', emoji: '🟥👅⬅️🤐🔊 🟣😗👅⬅️🔼', approx: 'goo' },
        { word: 'bog', sounds: 'b-o-g', emoji: '🟦👄🤐🔊 🟠😮👅⬅️🔽 🟥👅⬅️🤐🔊', approx: 'bohk' },
        { word: 'e', sounds: 'e', emoji: '🟢😐👅➡️', approx: 'eh' },
        { word: 'ach', sounds: 'a-ch', emoji: '🟡😮⬇️👅➡️ 🟥👅⬅️😬💨', approx: 'ach' },
        { word: 'tog', sounds: 't-o-g', emoji: '🟥👅🦷🤐 🟠😮👅⬅️🔽 🟥👅⬅️🤐🔊', approx: 'tohk' },
        { word: 'e', sounds: 'e', emoji: '🟢😐👅➡️', approx: 'eh' },
      ]
    }
  ];

  const handleFileUpload = (sound, event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'audio/mp3' || file.type === 'audio/mpeg' || file.type === 'audio/wav')) {
      const url = URL.createObjectURL(file);
      setUploadedFiles(prev => ({...prev, [sound]: url}));
    }
  };

  const playSound = (sound) => {
    const audioUrl = uploadedFiles[sound];
    if (audioUrl && audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  const startRecording = async (sound) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setSelectedSound(sound);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Please allow microphone access to record your pronunciation.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const SoundCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-200 hover:border-blue-400 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{item.sound}</h3>
          <p className="text-sm text-gray-500">IPA: [{item.ipa}]</p>
        </div>
        <div className="flex gap-2">
          <label className="cursor-pointer bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors">
            <Upload size={20} />
            <input 
              type="file" 
              accept=".mp3,.wav,audio/mpeg,audio/wav"
              className="hidden"
              onChange={(e) => handleFileUpload(item.sound, e)}
            />
          </label>
          {uploadedFiles[item.sound] && (
            <button 
              onClick={() => playSound(item.sound)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
            >
              <Volume2 size={20} />
            </button>
          )}
          <button 
            onClick={() => isRecording && selectedSound === item.sound ? stopRecording() : startRecording(item.sound)}
            className={`${isRecording && selectedSound === item.sound ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'} text-white p-2 rounded-lg transition-colors`}
          >
            <Mic size={20} />
          </button>
        </div>
      </div>
      
      <div className="text-4xl mb-4 leading-relaxed">{item.emoji}</div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-700"><strong>Action:</strong> {item.action}</p>
        {item.ref && <p className="text-sm text-gray-600"><strong>Reference:</strong> {item.ref}</p>}
        <div className="bg-blue-50 rounded p-3 mt-3">
          <p className="text-sm font-semibold text-blue-900">Example: <span className="text-lg">{item.example}</span></p>
          <p className="text-xs text-blue-700">"{item.meaning}"</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <audio ref={audioRef} />
      
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Leabharlann Fuaim Ghàidhlig</h1>
          <p className="text-xl opacity-90">Scottish Gaelic Audio Library</p>
          <p className="text-sm mt-4 italic opacity-75">Is fheàrr Gàidhlig bhriste na Gàidhlig sa chiste</p>
          <p className="text-xs opacity-75">Broken Gaelic is Better than Gaelic in a Coffin</p>
        </div>
      </header>

      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {['consonants', 'vowels', 'phrases'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-4 font-semibold transition-all ${
                  selectedTab === tab
                    ? 'border-b-4 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
          <h2 className="font-bold text-lg mb-2">🎯 How to Use This Library</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li><strong>Upload audio files:</strong> Click the green button to add your MP3 or WAV recordings</li>
            <li><strong>Play sounds:</strong> Click the blue button to hear the pronunciation</li>
            <li><strong>Practice:</strong> Click the purple button to record yourself (AI checking coming soon!)</li>
            <li><strong>Follow the emojis:</strong> Each emoji tells your mouth exactly what to do</li>
          </ol>
        </div>

        {recordedAudio && (
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8 rounded-r-lg">
            <h3 className="font-bold text-lg mb-2">Your Recording</h3>
            <audio src={recordedAudio} controls className="w-full mb-4" />
            <p className="text-sm text-gray-600">AI pronunciation checking coming soon! For now, compare your recording with the reference audio.</p>
          </div>
        )}

        {selectedTab === 'consonants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consonants.map((item) => (
              <SoundCard key={item.sound} item={item} />
            ))}
          </div>
        )}

        {selectedTab === 'vowels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vowels.map((item) => (
              <SoundCard key={item.sound} item={item} />
            ))}
          </div>
        )}

        {selectedTab === 'phrases' && (
          <div className="space-y-8">
            {phrases.map((phrase, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{phrase.gaelic}</h3>
                <p className="text-lg text-gray-600 mb-6 italic">"{phrase.meaning}"</p>
                
                <div className="space-y-4">
                  {phrase.breakdown.map((word, widx) => (
                    <div key={widx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Word</p>
                          <p className="text-2xl font-bold">{word.word}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Sounds</p>
                          <p className="text-lg">{word.sounds}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Emoji Guide</p>
                          <p className="text-xl leading-relaxed">{word.emoji}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Approximation</p>
                          <p className="text-lg font-mono">"{word.approx}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">🎓 The Emoji Articulation System transforms invisible speech into visible, actionable instructions</p>
          <p className="text-sm text-gray-400">Community-driven Gaelic technology for language preservation</p>
        </div>
      </footer>
    </div>
  );
};

export default GaelicSoundLibrary;
