const stringifyDate=(date)=>{
    const option={ day:'numeric', month:'short',year:'numeric' };
    const newDate=!date? "undefined":
    new Date(Date.parse(date)).toLocaleDateString( 'en-US', option);
    return newDate;
}