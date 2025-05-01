# Analizadores de Sentimientos (JavaScript y Python)

Este repositorio contiene dos implementaciones de un analizador de sentimientos: una en JavaScript para su uso en navegadores web y otra en Python para su uso en scripts y aplicaciones del lado del servidor. Ambas versiones permiten determinar la polaridad emocional de un texto dado, clasificándolo como positivo, negativo o neutro.

## Descripción General

El análisis de sentimientos es una técnica de procesamiento del lenguaje natural (PLN) que se utiliza para identificar y extraer la opinión subjetiva de un texto.  Estas herramientas pueden ser útiles para diversas aplicaciones, como el monitoreo de redes sociales, el análisis de opiniones de clientes y la evaluación de la respuesta emocional a contenidos.

### Características

* **Clasificación de Sentimientos:** Determina la polaridad general del texto (positivo, negativo o neutro).
* **Puntuaciones Detalladas:** Proporciona puntuaciones numéricas que reflejan la intensidad de cada sentimiento (positivo, negativo y neutro), así como una puntuación compuesta.
* **Implementaciones Versátiles:** Disponible en JavaScript para integración en el cliente y en Python para el servidor.

## Analizador de Sentimientos en JavaScript

### Descripción

La versión en JavaScript es una aplicación web que permite a los usuarios ingresar un texto y analizar su sentimiento directamente en el navegador.  Utiliza listas de palabras predefinidas para asignar una polaridad a cada palabra y calcular las puntuaciones del sentimiento general.

###  Funcionalidades

* **Interfaz de Usuario:** Proporciona un área de texto para la entrada del usuario y muestra los resultados del análisis de forma clara.
* **Análisis en Tiempo Real:** El análisis se realiza en el cliente, ofreciendo una respuesta rápida.
* **Manejo de Errores:** Incluye validación de entrada para asegurar que se ingrese texto antes del análisis.
* **Presentación de Resultados:** Muestra el sentimiento general y las puntuaciones detalladas (compuesto, positivo, negativo, neutro).

###  Tecnologías Utilizadas

* HTML
* CSS
* JavaScript

###  Instalación y Uso

1.  Clona el repositorio.
2.  Abre el archivo `index.html` en un navegador web.
3.  Ingresa el texto que deseas analizar en el área de texto proporcionada.
4.  Haz clic en el botón "Analizar".
5.  Los resultados del análisis se mostrarán debajo del área de texto.

###  Estructura de Archivos
/
├── index.html
└── Analizador de sentimientos.js
* `index.html`:  La página web principal que contiene la interfaz de usuario.
* `Analizador de sentimientos.js`:  El código JavaScript que realiza el análisis de sentimientos.

## Analizador de Sentimientos en Python

###  Descripción

La versión en Python es un script que utiliza la biblioteca `nltk` (Natural Language Toolkit) para realizar el análisis de sentimientos.  Específicamente, emplea el módulo `VADER (Valence Aware Dictionary and sEntiment Reasoner)`, que está optimizado para el análisis de sentimientos en redes sociales.

###  Funcionalidades

* **Análisis de Sentimientos con NLTK:** Utiliza la biblioteca `nltk` y el módulo `VADER` para un análisis preciso.
* **Puntuaciones Detalladas:** Calcula y muestra las puntuaciones de sentimiento compuesto, positivo, negativo y neutro.
* **Interfaz de Línea de Comandos:** Toma la entrada del usuario a través de la línea de comandos y muestra los resultados en la consola.

###  Tecnologías Utilizadas

* Python
* NLTK (Natural Language Toolkit)

###  Requisitos

* Python 3.x
* NLTK (`pip install nltk`)
* VADER lexicon (se descarga automáticamente si no está presente)

###  Instalación y Uso

1.  Asegúrate de tener Python 3.x instalado.
2.  Instala la biblioteca NLTK: `pip install nltk`
3.  Ejecuta el script `Analizador de sentimientos.py` desde la línea de comandos: `python Analizador de sentimientos.py`
4.  Ingresa el texto que deseas analizar cuando se te solicite.
5.  Los resultados del análisis se mostrarán en la consola.

###  Estructura de Archivos

/
└── Analizador de sentimientos.py


* `Analizador de sentimientos.py`: El script de Python que realiza el análisis de sentimientos.

## Consideraciones Importantes

* **Limitaciones:** Ambas versiones tienen limitaciones.  El análisis de sentimientos es un campo complejo y la precisión puede verse afectada por factores como el sarcasmo, la ironía, el contexto y las sutilezas del lenguaje.
* **Mejoras Futuras:** Se podrían considerar mejoras como la expansión de los léxicos de palabras, la implementación de técnicas de procesamiento del lenguaje natural más avanzadas y la incorporación de soporte para diferentes idiomas.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

# Analizadores de Sentimientos (JavaScript y Python)

Este repositorio contiene dos implementaciones de un analizador de sentimientos: una en JavaScript para su uso en navegadores web y otra en Python para su uso en scripts y aplicaciones del lado del servidor. Ambas versiones permiten determinar la polaridad emocional de un texto dado, clasificándolo como positivo, negativo o neutro.

## Descripción General

El análisis de sentimientos es una técnica de procesamiento del lenguaje natural (PLN) que se utiliza para identificar y extraer la opinión subjetiva de un texto.  Estas herramientas pueden ser útiles para diversas aplicaciones, como el monitoreo de redes sociales, el análisis de opiniones de clientes y la evaluación de la respuesta emocional a contenidos.

### Características

* **Clasificación de Sentimientos:** Determina la polaridad general del texto (positivo, negativo o neutro).
* **Puntuaciones Detalladas:** Proporciona puntuaciones numéricas que reflejan la intensidad de cada sentimiento (positivo, negativo y neutro), así como una puntuación compuesta.
* **Implementaciones Versátiles:** Disponible en JavaScript para integración en el cliente y en Python para el servidor.

## Analizador de Sentimientos en JavaScript

### Descripción

La versión en JavaScript es una aplicación web que permite a los usuarios ingresar un texto y analizar su sentimiento directamente en el navegador.  Utiliza listas de palabras predefinidas para asignar una polaridad a cada palabra y calcular las puntuaciones del sentimiento general.

###  Funcionalidades

* **Interfaz de Usuario:** Proporciona un área de texto para la entrada del usuario y muestra los resultados del análisis de forma clara.
* **Análisis en Tiempo Real:** El análisis se realiza en el cliente, ofreciendo una respuesta rápida.
* **Manejo de Errores:** Incluye validación de entrada para asegurar que se ingrese texto antes del análisis.
* **Presentación de Resultados:** Muestra el sentimiento general y las puntuaciones detalladas (compuesto, positivo, negativo, neutro).

###  Tecnologías Utilizadas

* HTML
* CSS
* JavaScript

###  Instalación y Uso

1.  Clona el repositorio.
2.  Abre el archivo `index.html` en un navegador web.
3.  Ingresa el texto que deseas analizar en el área de texto proporcionada.
4.  Haz clic en el botón "Analizar".
5.  Los resultados del análisis se mostrarán debajo del área de texto.

###  Estructura de Archivos

/
├── index.html
└── Analizador de sentimientos.js


* `index.html`:  La página web principal que contiene la interfaz de usuario.
* `Analizador de sentimientos.js`:  El código JavaScript que realiza el análisis de sentimientos.

## Analizador de Sentimientos en Python

###  Descripción

La versión en Python es un script que utiliza la biblioteca `nltk` (Natural Language Toolkit) para realizar el análisis de sentimientos.  Específicamente, emplea el módulo `VADER (Valence Aware Dictionary and sEntiment Reasoner)`, que está optimizado para el análisis de sentimientos en redes sociales.

###  Funcionalidades

* **Análisis de Sentimientos con NLTK:** Utiliza la biblioteca `nltk` y el módulo `VADER` para un análisis preciso.
* **Puntuaciones Detalladas:** Calcula y muestra las puntuaciones de sentimiento compuesto, positivo, negativo y neutro.
* **Interfaz de Línea de Comandos:** Toma la entrada del usuario a través de la línea de comandos y muestra los resultados en la consola.

###  Tecnologías Utilizadas

* Python
* NLTK (Natural Language Toolkit)

###  Requisitos

* Python 3.x
* NLTK (`pip install nltk`)
* VADER lexicon (se descarga automáticamente si no está presente)

###  Instalación y Uso

1.  Asegúrate de tener Python 3.x instalado.
2.  Instala la biblioteca NLTK: `pip install nltk`
3.  Ejecuta el script `Analizador de sentimientos.py` desde la línea de comandos: `python Analizador de sentimientos.py`
4.  Ingresa el texto que deseas analizar cuando se te solicite.
5.  Los resultados del análisis se mostrarán en la consola.

###  Estructura de Archivos

/
└── Analizador de sentimientos.py


* `Analizador de sentimientos.py`: El script de Python que realiza el análisis de sentimientos.

## Consideraciones Importantes

* **Limitaciones:** Ambas versiones tienen limitaciones.  El análisis de sentimientos es un campo complejo y la precisión puede verse afectada por factores como el sarcasmo, la ironía, el contexto y las sutilezas del lenguaje.
* **Mejoras Futuras:** Se podrían considerar mejoras como la expansión de los léxicos de palabras, la implementación de técnicas de procesamiento del lenguaje natural más avanzadas y la incorporación de soporte para diferentes idiomas.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

MIT License

Copyright (c) 2025 Mitsunori Kawashiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Autor

**Mitsunori Kawashiro**

* Sitio web: [https://kawashiro.dev/](https://kawashiro.dev/)
* Correo electrónico: [contact@kawashiro.dev](mailto:contact@kawashiro.dev)

## Agradecimientos

Agradezco a la comunidad de código abierto por sus valiosas contribuciones y recursos que hicieron posible este proyecto.  En particular, a los desarrolladores de NLTK y VADER por sus excelentes herramientas.
