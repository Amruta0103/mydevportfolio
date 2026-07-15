import Calculator from '../assets/Calculator.svg';
import Clock from '../assets/Clock.svg';
import Lift from '../assets/Lift.svg';
import Keyboard from '../assets/Keyboard.svg';
import StandHere from '../assets/StandHere.png';

const projectsData = [
  {
    'title': 'Stand Here',
    'image': StandHere,
    'description': 'Stand Here is a short arcade game built in Unity where your goal is to find the randomly generated safe tile before the timer runs out.',
    'liveLink': 'https://amruta0103.itch.io/stand-here',
    'gitLink': 'https://github.com/Amruta0103/Stand-Here',
  },
  {
    'title': 'Calculator',
    'description': 'A calculator App that does basic calculations',
    'image': Calculator,
    'liveLink': 'https://simply-calcy.netlify.app/',
    'gitLink': 'https://github.com/Amruta0103/calculator',
  },
  {
    'title': 'Count MyTime',
    'description': 'A countdown timer. I explored asynchronous functions and calculations for setting timers with various corner cases',
    'image': Clock,
    'liveLink': 'https://countmytime.netlify.app/',
    'gitLink': 'https://github.com/Amruta0103/countmytime',
  },
  {
    'title': 'Lift Simulation',
    'description': 'An interactive, visual representation of how multiple lifts would work at different levels of floors',
    'image': Lift,
    'liveLink': 'https://lift-simulation-amruta.netlify.app/',
    'gitLink': 'https://github.com/Amruta0103/lift-simulation',
  },
  {
    'title': 'Minion Traslator',
    'description': "A simple translator using an API that translate into and from English into Minion's language",
    'image': Keyboard,
    'liveLink': 'https://minion-speaks-banana.netlify.app/',
    'gitLink': 'https://github.com/Amruta0103/Banana-speak',
  },
];

export default projectsData;