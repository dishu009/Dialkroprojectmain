import { createTransport } from "nodemailer";

export const senEm = async (to, subject, text) => {
  const transport = createTransport({
    // service: process.env.SERV,
    // auth: {
    //   user: process.env.EUSER,
    //   pass: process.env.EPASS,
    // },
    host: process.env.EMAILH,
    port: process.env.EMAILP,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
  await transport.sendMail({
    to,
    subject,
    text,
    from: "dialkro@gmail.com",
  });
};
