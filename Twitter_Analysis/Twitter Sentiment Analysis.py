from transformers import AutoTokenizer, AutoModelForSequenceClassification
from scipy.special import softmax
import streamlit as st
st.title('Twitter Tweets sentiment analysis')
tweet = st.text_area('Please give a tweet from twitter')
tweet_words = []
for word in tweet.split(' '):
    if word.startswith('@') and len(word) > 1:
        word = '@user'
    elif word.startswith('http'):
        word = "http"
    tweet_words.append(word)
tweet_proc = " ".join(tweet_words)
roberta = "cardiffnlp/twitter-roberta-base-sentiment"
model = AutoModelForSequenceClassification.from_pretrained(roberta)
tokenizer = AutoTokenizer.from_pretrained(roberta)
labels = ['Negative', 'Neutral', 'Positive']
encoded_tweet = tokenizer(tweet_proc, return_tensors='pt')
# output = model(encoded_tweet['input_ids'], encoded_tweet['attention_mask'])
output = model(**encoded_tweet)
scores = output[0][0].detach().numpy()
scores = softmax(scores)




if st.button('Enter'):
    for i in range(len(scores)):
        l = labels[i]
        s = scores[i]
        st.write(l)
        st.write(s)


# Run in Terminal
# streamlit run filename.py
