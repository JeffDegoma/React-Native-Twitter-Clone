import User from '../../models/User'
import { requireAuth } from '../../services/auth'


export default {
    signup: async (_, { fullName, ...rest}) => {
       try {
        const [firstName, ...lastName] = fullName.split(" ");
        const user = await User.create({ firstName, lastName, ...rest})
        
        return {
            token: user.createToken(),
        }
       } catch(error) {
            throw error
       }
    },

    login: async (_, {email, password}) => { 
        try {
            const user = await User.findOne({ email })

        if (!user) {
            throw new Error("User does not exist!")
        }
        if(!user.authenticateUser(password)){
            throw new Error("Passwords does not match!")
        }
        return user;
        } catch(error) {
            throw error
        }
    },

    me: async(_, args, { user }) => {
        try {
            await requireAuth(user )
            return User.findById(user._id)
        } catch(error) {
            throw error
        }
    }

}