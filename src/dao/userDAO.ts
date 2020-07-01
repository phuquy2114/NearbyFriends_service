import {getManager} from "typeorm"
import {User} from "../entity/User"

class PhotoDao {

    getAll() {
        return getManager().find(User);
    }

    insert(photo: User) {
        return getManager().save<User>(photo);
    }

}

export default PhotoDao;