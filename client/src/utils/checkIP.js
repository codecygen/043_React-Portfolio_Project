const checkIP = async () => {
    const ipRes = await fetch("https://www.myexternalip.com/json");
    const ipData = await ipRes.json();
    let ip = ipData.ip;

    if (!ip) {
        ip = "Cannot connect API to get info!";
    }

    return ip;
};

export default checkIP;