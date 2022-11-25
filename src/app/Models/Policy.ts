export class policy {

    pid?: number;
    pname = "";
    pdesc_short = "";
    pdesc = "";
    ptype = "";
    pCoverage?: number;
    pPremium?: number = 1;
    gender = "";
    ageGroup = "";
    members = "";
    insurer = "";
    pgrade?: number;
    pstatus = "";
}

export class userPolicy extends policy {
    uid?: number;
    policyId = "";
}