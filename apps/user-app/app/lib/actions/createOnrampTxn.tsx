"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function OnRampTransaction(provider: string, amount: number) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const token = Math.random().toString();

  !userId ? "user not logged in" : "onramp transaction added";

  await prisma.onRampTransaction.create({
    data: {
      userId: Number(userId),
      amount: amount * 100,
      startTime: new Date(),
      status: "Processing",
      token: token,
      provider,
    },
  });
}

// "use server";

// import prisma from "@repo/db/client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth";

// export async function createOnRampTransaction(
//   provider: string,
//   amount: number
// ) {
//   // Ideally the token should come from the banking provider (hdfc/axis)
//   const session = await getServerSession(authOptions);
//   if (!session?.user || !session.user?.id) {
//     return {
//       message: "Unauthenticated request",
//     };
//   }
//   const token = (Math.random() * 1000).toString();
//   await prisma.onRampTransaction.create({
//     data: {
//       provider,
//       status: "Processing",
//       startTime: new Date(),
//       token: token,
//       amount: amount * 100,
//       user: {
//         connect: {
//           id: Number(session?.user?.id),
//         },
//       },
//     },
//   });

//   console.log("Amount being passed:", amount);
//   console.log("Amount * 100:", amount * 100);

//   return {
//     message: "Done",
//   };
// }
