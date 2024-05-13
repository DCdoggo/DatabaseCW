import { createClient } from "@supabase/supabase-js";
const supabase = createClient('nameofwebsite', 'public-key')

const {data, error} = await supabase.auth.signUp(
    {
        email: "idk@gmail.com",
        password: "brapbrap" , 
    }
);

supabase.auth.onAuthStateChange((event, session) => 
{
    console.log(event, session)
});