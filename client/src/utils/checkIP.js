const checkIP = async () => {
    const ipRes = await fetch("https://www.myexternalip.com/json");
    const ipData = await ipRes.json();
    const ip = ipData.ip;

    return ip;
};

export default checkIP;