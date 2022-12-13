import { toast } from "react-toastify";

const HandleSaveUser = async (user) => {
    const userInfo = await user;

    const userData = {
        userName: userInfo.displayName,
        userEmail: userInfo.email,
        userRole: "user",
    }

    const url = "http://localhost:5000/api/v1/users";

    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(result => {
            if (result.success) {
                setTimeout(() => {
                    toast.success("Account Saved");
                }, 5000);
            }
        })

};

export default HandleSaveUser;