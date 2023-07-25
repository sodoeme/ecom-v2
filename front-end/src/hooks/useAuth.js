import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isUser = false
    
    let status = "Guest"
console.log(token)
    if (token && (token!== "undefined")) {
        const decoded = jwtDecode(token)
        const { email, roles } = decoded.UserInfo

        isUser = roles.includes('user')
      

        if (isUser) status = "User"
       

        return { email, roles, status, isUser }
    }

    return { email: '', roles: [], isUser, status }
}
export default useAuth