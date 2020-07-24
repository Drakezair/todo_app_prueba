import firebase from "../../Shared/utils/firebase";
import 'firebase/database';

const db = firebase.database();

export default class WorkplaceRepository {

    static addTask = (email: string,name: string, avatar: string ,title: string, desc: string, dateEnd: string) => {
        db.ref('task/').push({email, avatar, title, desc, dateEnd, name, active: true})
    }

    static removeTask = (key: string) => {
        console.log(key)
        db.ref('task/').child(key).remove()
    }

    static getTask = (callback:any) => {
        db.ref('task/').on('value',(snapshot:any, i:number)=>{
            var returnArr:any = [];

            snapshot.forEach(function(childSnapshot:any) {
                var item = childSnapshot.val();
                item.id = childSnapshot.key;

                returnArr.push(item);
            });
            callback(returnArr);
        })
    }
}
