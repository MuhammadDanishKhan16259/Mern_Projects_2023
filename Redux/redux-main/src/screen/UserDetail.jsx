import { useSelector } from "react-redux"

export default function UserDetail () {
    let data = useSelector(a => a.login);

    return (
        <section className="userDetail">
            <div className="heading">
                <h1>User Detail</h1>
            </div>
            <h1>Name: {data.name}</h1>
            <h1>Email: {data.email}</h1>
            <h1>Password: {data.password}</h1>
        </section>
    )
}