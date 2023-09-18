const checkIP = async () => {
    const ipRes = await fetch(process.env.REACT_APP_IP_API);
    const ipData = await ipRes.json();
    let ip = ipData.ip;

    if (!ip) {
        ip = "Cannot connect API to get info!";
    }

    return ip;
};

export default checkIP;