const BASE_URL = "https://fitnesstrac-kr.herokuapp.com"

export const SignUpUser = async (username,password) => {
    console.log("im getting this far")
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    }  
    const response = await fetch(`${BASE_URL}/api/users/register`,options)
    const result = await response.json()

    console.log("This is result:", result)
    if (result.error){
        alert("Account is already registered. Please log in")
    }

    return result
}