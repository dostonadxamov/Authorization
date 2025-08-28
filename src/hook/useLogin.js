
export default function useLogin() {
  function login(email, password) {
    console.log(`Name: ${email}  Password: ${password}`);
    
  }

  return {login}
}
