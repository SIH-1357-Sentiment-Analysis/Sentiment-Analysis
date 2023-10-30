import streamlit as st
import speech_recognition as sr

st.title("Speech Recognition Web App")

# Define the supported languages
lang_set = [
    'afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'basque',
    'belarusian', 'bengali', 'bosnian', 'bulgarian', 'catalan', 'cebuano', 'chichewa',
    'chinese (simplified)', 'chinese (traditional)', 'corsican', 'croatian', 'czech',
    'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish',
    'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati',
    'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian',
    'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese',
    'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao',
    'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy',
    'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)',
    'nepali', 'norwegian', 'odia', 'pashto', 'persian', 'polish', 'portuguese',
    'punjabi', 'romanian', 'russian', 'samoan', 'scots gaelic', 'serbian', 'sesotho',
    'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish',
    'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'turkish',
    'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba',
    'zulu'
]

# Create a Streamlit widget to select the language
selected_lang = st.selectbox("Select the input language", lang_set)


# Create a function to recognize speech from the microphone
def recognize_speech(language):
    r = sr.Recognizer()
    with sr.Microphone() as source:
        st.write("Listening to the voice...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        st.write("Recognizing the voice...")
        text = r.recognize_google(audio, language=language)
        st.write(f"User said: {text}")
    except Exception as e:
        st.error("Could not understand the audio. Please try again.")


# Create a button to trigger speech recognition
if st.button("Start Speech Recognition"):
    recognize_speech(selected_lang)