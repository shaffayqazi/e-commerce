import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
     try {
          // Generate a salt
          const saltRounds = 10;
       const hashedPassword = await bcrypt.hash(password, saltRounds);
       return hashedPassword;
//    
  } catch (error) {
    console.log(error);
  }
};


export const comparePassword = async (password, hashedPassword) => {
     try {
     const match = await bcrypt.compare(password, hashedPassword);
     return match;
     } catch (error) {
     console.log(error);
     }
     };
