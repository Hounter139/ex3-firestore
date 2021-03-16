import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {

    apiKey: "AIzaSyB-GGVMcqSDfNifrnI8kNpg5TSOeeC19Uo",
    authDomain: "pvt-ext3.firebaseapp.com",
    projectId: "pvt-ext3",
    storageBucket: "pvt-ext3.appspot.com",
    messagingSenderId: "998601961722",
    appId: "1:998601961722:web:c1733031f7568333711943",
    measurementId: "G-V9G9YYLHJW"
 
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;