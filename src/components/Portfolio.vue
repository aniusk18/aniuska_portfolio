
<template>
    <div className="min-h-screen flex flex-col portfolio">
      <main className="flex-1 container mx-auto px-7 py-10 md:py-48 text-center ">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
          <div className="flex flex-col items-center  text-center">
            <div className="mb-6 md:p-8">
              <img src="./../assets/logo.png" alt="Logo" width=150 className="mx-auto md:mx-0" />
            </div>

            <h1 className="text-5xl font-bold text-gray-800 mb-2">Aniuska Maita</h1>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Aparicio</h1>

            <h2 className="text-4xl font-medium text-purple-500 accent mb-4">Web Developer</h2>

            <p className="text-xl text-gray-700 uppercase tracking-wide mb-8">LARAVEL - VUEJS - MYSQL - NODEJS</p>
          </div>
          <div className="flex items-center justify-center h-full">
            <p className="text-center mx-auto max-w-md">
              Hola, me llamo Aniuska
              <br />
              Soy Ingeniero de sistemas profesionalmente orientada al Desarrollo y Diseño web, con más de 8 años de
              experiencia en desarrollo web y APIs.
              <br />
              <br />
              Amplia experiencia en programación con PHP (Back-End), Symfony (2,3,4,5), Lumen y Node.js. Con gran
              capacidad de adaptación, trabajo en equipo y resolución de problemas, siempre en busca de nuevos
              conocimientos y tendencias tecnológicas.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div>
              <p className="text-purple-500 text-3xl accent font-medium">¡Trabajemos juntos!</p>
            </div>

            <div className="flex flex-col space-y-4 items-center">
              <div className="flex items-center">
                
                <a href="mailto:Ani.m.aparicio@gmail.com" className="text-gray-800 hover:text-purple-600"> 
                    <font-awesome-icon :icon="['fas', 'envelope']" class="text-[1.2rem] px-4"/>
                    <span>Ani.m.aparicio@gmail.com</span>
                </a>
              </div>

              <div className="flex items-center">
                <a href="https://linkedin.com/in/aniuska-maita-aparicio" className="text-gray-800 hover:text-purple-600"> 
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="text-[1.2rem] px-4"/>
                    <span>/aniuska-maita-aparicio</span>
                </a>
               
              </div>

              <div className="mt-4">
                <a href="../cv_aniuska_maita_aparicio.pdf" download  className="background hover:bg-purple-600 text-white py-3 px-6 rounded-md transition-colors"> Descargar mi cv </a>
                
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-purple-500 py-6 mt-12">
        <div className="container mx-auto px-4"></div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortfolioComponent',
    methods: {
      downloadCV() {
        // Lógica para descargar el CV
        window.open('/cv_aniuska_maita_aparicio.pdf', '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  .portfolio {
    
    text-align: center;
  }
  .column {
    flex: 1;
    margin: 0 10px;
  }
  /* h1 {
    color: #6a1b9a;
  }
  h2 {
    color: #8e24aa;
  } */
  .social-links a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #795fe2;
  }
  .social-links img {
    width: 20px;
    margin-right: 10px;
  }
  .accent{
    color: #795fe2;
  }
  .background{
    background:#795fe2;
  }
  button {
    background-color: #795fe2;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #795fe2;
  }
  footer{
    background-color: #795fe2;
  }
  </style>