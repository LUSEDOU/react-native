import { useEffect, useReducer } from 'react'

interface AuthState {
    fullName: string,
    username: string,
    token: string | null
    authenticated: boolean
}

const initialState: AuthState = {
    fullName: '',
    username: '',
    token: null,
    authenticated: false
}

type AuthPayload = {
    username: string,
    fullName: string
}

type AuthAction = 
    | { type: 'logout'}
    | { type: 'logIn', payload: AuthPayload}


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
        return {
            authenticated: false,
            token: null,
            username: '',
            fullName: ''
        }
    case 'logIn':
        const {username, fullName} = action.payload;
        return {
            authenticated: false,
            token: 'ABC123456',
            username,
            fullName,
        }
    default:
        return state
    }
}

export const Login = () => {
    const [{authenticated, token, fullName}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout(() => {
        dispatch({type:'logout'});
      }, 1500);
    }, [])
        
    const login = () => {
        dispatch({
            type: 'logIn', 
            payload: {
                fullName: 'Luis', 
                username: 'LUSEDOU',
            }
        })
    }

    const logOut = () => {
        dispatch({
            type: 'logout'
        })
    }

    if (authenticated) {
        return (
        <>
            <h3>Login</h3>
            <div className='alert alert-info'>
                Authenticating...
            </div>
        </>
        )
    }

    return (
        <>
        <h3>Login</h3>
        {
            (token)
            ?
                <div className='alert alert-success'>
                    Authenticated as {fullName}
                </div>
            :
                <div className='alert alert-danger'>
                    Unauthenticated
                </div>
        }

        {
            (token)
            ?
                <button 
                        className='btn btn-danger'
                        onClick={logOut}
                >
                    LogOut
                </button>
                :
                <button 
                        className='btn btn-primary'
                        onClick={login}
                >
                    LogIn
                </button>
        }
        </>
    )
}