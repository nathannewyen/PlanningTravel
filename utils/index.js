import EventBus from './EventBus';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "travel-more-fun.firebaseapp.com",
    projectId: "travel-more-fun",
    storageBucket: "travel-more-fun.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-LYTN488C7C"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  
const db = firebase.firestore();
const auth = firebase.auth();

const snapshotToArray = querySnapshot => {
    if (!querySnapshot.docs && !querySnapshot.docs.length > 0) {
      throw new Error('No docs!!');
    }
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
  
const getUnvisitedPlaces = async () => {
    try {
      const querySnapshot = await db
        .collection('places')
        .where('visited', '==', 'No')
        .get();
      const placesArr = snapshotToArray(querySnapshot);
      return placesArr;
    } catch (e) {
      console.error('📣: fetchData -> e', e);
    }
};
  
const getVisitedPlaces = async () => {
    try {
      const querySnapshot = await db
        .collection('places')
        .where('visited', '==', 'Yes')
        .get();
      const placesArr = snapshotToArray(querySnapshot);
      return placesArr;
    } catch (e) {
      console.error('📣: fetchData -> e', e);
    }
  };

  const addPlace = async place => {
    try {
      await db
        .collection('places')
        .doc(place.id ? place.id : slugify(place.name))
        .set(place);
    } catch (e) {
      console.error('📣: addPlace -> e', e);
    }
  };

const defaultTags = {
    type: {
      adventure: false,
      beach: false,
      city: false,
      ski: false,
    },
    temperature: {
      hot: false,
      cold: false,
      temperate: false,
    },
    flight: {
      long: false,
      medium: false,
      short: false,
    },
  };
  
  const defaultTagField = {
    type: '',
    temperature: '',
    flight: '',
  };
  
  const defaultPlace = {
    name: '',
    description: '',
    img: '',
    visited: 'No',
    visitedDate: '',
    tags: defaultTagField,
  };

  const getPlacesByTags = async tagsToQuery => {
    try {
      let query = db.collection('places').where('visited', '==', 'No');
  
      for (const key in tagsToQuery) {
        const value = tagsToQuery[key];
        if (value) {
          query = query.where(`tags.${key}`, '==', value);
        }
      }
  
      const querySnapshot = await query.get();
      const places = snapshotToArray(querySnapshot);
      return places;
    } catch (e) {
      console.error('📣: getPlacesByTags -> e', e);
    }
  };
  
  const login = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      const { code, message } = e;
      console.error('📣: login -> error', code, message);
    }
  };
  
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      const { code, message } = e;
      console.error('📣: logout -> error', code, message);
    }
  };
  

export {
    EventBus,
    db,
    auth,
    login,
    logout,
    snapshotToArray,
    defaultTags,
    defaultTagField,
    defaultPlace,
    addPlace,
    getPlacesByTags,
    getUnvisitedPlaces,
    getVisitedPlaces,
};