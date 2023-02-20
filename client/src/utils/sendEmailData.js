const sendEmailData = async (emailData) => {
  let data;

  try {
    const res = await fetch(`${process.env.REACT_APP_API_LINK}/email`, {
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

    data = await res.json();
  } catch (e) {
    console.error(e);
  }

  return data;
};

export default sendEmailData;
