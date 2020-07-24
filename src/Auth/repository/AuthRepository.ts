import firebase from "../../Shared/utils/firebase";
import { setCurrentUser } from '../../Shared/utils/hooks'
require('firebase/auth');


export default class AuthRepository {
    static signIn = () => {
      console.log(firebase.auth())
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result :any) {
            var user = result.user;
            setCurrentUser({
              avatar: user.photoURL,
              name: user.displayName,
              email: user.email,
            })
          })
    }

}