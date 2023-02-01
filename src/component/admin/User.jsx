import React from 'react'
import me from "../../assets/founder.jpg"

const User = () => {
    const arr= [1,2,3,4]
  return (
    <section className='tableClass'>
    <main>
        <table>
        <thead>
            <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
            </tr>
        </thead>

            <tbody>
                {
                    arr.map((i)=>(
                        <tr key={i}>
                    <td>#aejfjafafaefn</td>
                    <td>Vishu</td>
                    <td>
                        <img src={me} alt="myimage" />
                    </td>
                    <td>Admin</td>
                    <td>{"24-23-2023"}</td>
                </tr>
                    ))
                }
            </tbody>

        </table>
    </main>
   </section>
  )
}

export default User