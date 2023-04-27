<template>
    <cabecera />
    <section id="cuerpo">
    <div class="skills text-center max-w-screen-sm mx-auto">
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">Front-end</h2>
    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">HTML</div>
      <div class="skill-bar html rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: html + '%'}">90%</div>
      </div>
    </div>
    <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">CSS</div>
      <div class="skill-bar css rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: css + '%'}">80%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">TailWind</div>
      <div class="skill-bar tail rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: css + '%'}">30%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">JavaScript</div>
      <div class="skill-bar js rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: js + '%'}">69%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Vue</div>
      <div class="skill-bar vue rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: js + '%'}">75%</div>
      </div>
    </div>
    
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">Back-end</h2>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">PHP</div>
      <div class="skill-bar php rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: php + '%'}">40%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Laravel</div>
      <div class="skill-bar laravel rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: laravel + '%'}">50%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">Symfony</div>
      <div class="skill-bar symfony rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: symfony + '%'}">35%</div>
      </div>
    </div>
    
    <h2 class="font-bold text-3xl mb-6 mt-6 font-oswald">DataBases</h2>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">MySql</div>
      <div class="skill-bar MySql rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: MySql + '%'}">50%</div>
      </div>
    </div>
     <div class="skill flex items-center mb-4">
      <div class="skill-name flex-1 text-lg">PL/Sql</div>
      <div class="skill-bar pl rounded-2xl h-5 ml-4 relative w-4/5 bg-gray-300 py-4">
        <div class="skill-progress" :style="{width: pl + '%'}">15%</div>
      </div>
    </div>
  </div>
  </section>
    <pie />
  </template>
  
  <script>
  import cabecera from './cabecera.vue';
  import pie from './pie.vue';
  export default {
    name: 'Skills',
    data() {
      return {
        html: 90,
        css: 80,
        tail: 30,
        js: 69,
        php: 40,
        laravel: 50,
        symfony: 35,
        MySql: 50,
        pl: 15,
        vue: 75
      };
    },
    components: {
      cabecera,
      pie
    },
  };
  </script>
  
  <style>

#cuerpo {
  position: relative;
  min-height: 82.5vh;
}


  .skill-progress {
    border-radius: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    color: white;
  }
  
  .html .skill-progress {
    background-color: #A5CCC9;
    animation: fill-barHTML 2s ease-in-out forwards;
  }

    
  @keyframes fill-barHTML {
    0% {
      width: 0;
    }
    100% {
      width: 90%;
    }
  }
  
  .css .skill-progress {
    background-color: #b4d3c1;
    animation: fill-barCSS 2s ease-in-out forwards;
  }

  @keyframes fill-barCSS {
        0% {
        width: 0;
        }
        100% {
        width: 70%;
        }
    }

.tail .skill-progress {
    background-color: #84b799;
    animation: fill-barTail 2s ease-in-out forwards;
  }

    
  @keyframes fill-barTail {
    0% {
      width: 0;
    }
    100% {
      width: 30%;
    }
  }
  
  .js .skill-progress {
    background-color: #c0dbbd;
    animation: fill-barJS 2s ease-in-out forwards;
  }
  
  @keyframes fill-barJS {
        0% {
        width: 0;
        }
        100% {
        width: 69%;
        }
    }

   .vue .skill-progress {
    background-color: #a4cab4;
    animation: fill-barVUE 2s ease-in-out forwards;
  }

    
  @keyframes fill-barVUE {
    0% {
      width: 0;
    }
    100% {
      width: 75%;
    }
  }
  
  .php .skill-progress {
    background-color: #c1b4d3;
    animation: fill-barPHP 2s ease-in-out forwards;
  }

    @keyframes fill-barPHP {
        0% {
        width: 0;
        }
        100% {
        width: 40%;
        }
    }

    .laravel .skill-progress {
    background-color: #b4b7d3;
    animation: fill-barlaravel 2s ease-in-out forwards;
  }

    
  @keyframes fill-barlaravel {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }

  .symfony .skill-progress {
    background-color: #d1b4d3;
    animation: fill-barsf 2s ease-in-out forwards;
  }

    
  @keyframes fill-barsf {
    0% {
      width: 0;
    }
    100% {
      width: 35%;
    }
  }

  .MySql .skill-progress {
    background-color: #d3d1b4;
    animation: fill-barmy 2s ease-in-out forwards;
  }

    
  @keyframes fill-barmy {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }

  .pl .skill-progress {
    background-color: #c0bd94;
    animation: fill-barpl 2s ease-in-out forwards;
  }

    
  @keyframes fill-barpl {
    0% {
      width: 0;
    }
    100% {
      width: 15%;
    }
  }

  </style>