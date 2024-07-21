
import UserModel from '@/model/User'



import {connect} from '../../../dbconfig/dbconfig'
export async function POST(request: Request) {
  await connect();
  
  const { name, email, password } = await request.json();
 
  const user = await UserModel.findOne({ email: email });
  if (user) {
      console.log("user with email already exists")
      return Response.json({
        success:false,
        message:"User already exists with this email"
    },
{
    status:400
})
    }
  else {
      const newUser = await UserModel.create({
          name: name, email: email, password: password
      })
      if(newUser){
        console.log(newUser)
        return Response.json(
            {
              success:true,
              message: 'signUp succesfull',
            },
            { status: 200 }
          );
      }
      
    }
  }
