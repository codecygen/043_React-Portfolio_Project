const sendEmailData = async (emailData) => {
  let data;

  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/email`, {
      method: "POST",
      body: JSON.stringify({
        emailData,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // This allows us to receive cookies from server
      credentials: "include",
    });

    if (!res.ok) {
      console.error("Something went awry!");
    }

    data = await res.json();
  } catch (e) {
    console.error(e);
  }

  return data;
};

export default sendEmailData;
