from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk

try:
    nltk.data.find('sentiment/vader_lexicon.zip')
except nltk.downloader.DownloadError:
    nltk.download('vader_lexicon')

def analizar_sentimiento(texto, umbral=0.1):
    analizador = SentimentIntensityAnalyzer()
    puntuaciones = analizador.polarity_scores(texto)
    compuesto = puntuaciones['compound']

    if compuesto >= umbral:
        sentimiento = "positivo"
    elif compuesto <= -umbral:
        sentimiento = "negativo"
    else:
        sentimiento = "neutro"

    return sentimiento, puntuaciones

texto = input("Ingrese un texto: ")
sentimiento, puntuaciones = analizar_sentimiento(texto)

print("\n--- Resultado del Sentimiento ---")
print(f"  Sentimiento: {sentimiento}")
print(f"  Puntuación (Compuesto): {puntuaciones['compound']:.4f}")
print(f"  Positivo: {puntuaciones['pos']:.4f}")
print(f"  Negativo: {puntuaciones['neg']:.4f}")
print(f"  Neutro: {puntuaciones['neu']:.4f}")
print("----------------------------------")