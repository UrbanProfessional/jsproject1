function initialize()
{
    pA = document.getElementById("1");
    nA = document.getElementById("2");
    dA = document.getElementById("3");
    qA = document.getElementById("4");
    tA = document.getElementById("t");
    i1 = 0;
    i2 = 0;
    i3 = 0;
    i4 = 0;
    i5 = 0;
    display();
}

function addPenny()
{
    i1++;
    display();
}

function subtractPenny()
{
    if (i1 > 0)
    {
        i1--;
    }
    display();
}

function addNickel()
{
    i2++;
    display();
}

function subtractNickel()
{
    if (i2 > 0)
    {
        i2--;
    }
    display();
}

function addDime()
{
    i3++;
    display();
}

function subtractDime()
{
    if (i3 > 0)
    {
        i3--;
    }
    display();
}

function addQuarter()
{
    i4++;
    display();
}

function subtractQuarter()
{
    if (i4 > 0)
    {
        i4--;
    }
    display();
}

function display()
{
    pA.innerHTML = i1;
    nA.innerHTML = i2;
    dA.innerHTML = i3;
    qA.innerHTML = i4;
    i5 = (i1 * 0.01) + (i2 * 0.05) + (i3 * 0.1) + (i4 * 0.25);
    i5 = parseFloat(i5).toFixed(2);
    tA.innerHTML = i5;
}