const sendEmailData = async (emailData) => {
  try {
    const res = await fetch("/email", {
      method: "POST",
      body: JSON.stringify({
        emailData,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error("Something went awry!");
    }

    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

export default sendEmailData;
