// Code your solution here
function findMatching(drivers, name)
{
    //console.log("name = " + name);
    let dmarr = drivers.filter(
        function(element) {
            //console.log("element = " + element);
            //console.log("name = " + name);
            let tempname = element.toString().toLowerCase();
            let lwrname = name.toLowerCase();
            //console.log("tempname = " + tempname);
            //console.log("lwrname = " + lwrname);
            if (tempname === lwrname) return true;
            else return false;
        }
    );
    //console.log("dmarr = " + dmarr);
    return dmarr;
}

function fuzzyMatch(drivers, name)
{
    let dmarr = drivers.filter(
        function(element) {
            //console.log("element = " + element);
            //console.log("name = " + name);
            let tempstrindx = element.toString().indexOf(name);
            //console.log("tempstrindx = " + tempstrindx);
            if (tempstrindx == 0 && tempstrindx < element.length)
            {
                return true;
            }
            else return false;
        }
    );
    //console.log("dmarr = " + dmarr);
    return dmarr;
}

function matchName(drivers, name)
{
    let dmarr = drivers.filter(
        function(element) {
            if (element.name === name) return true;
            else return false;
        }
    );
    //console.log("dmarr = " + dmarr);
    return dmarr;
}
