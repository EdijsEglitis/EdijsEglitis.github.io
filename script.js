//Masīvs jeb array//

const emils = "Emīls";
const natalija = "Natālija";
const edijs = "Edijs";
const edgars = "Edgars";

const skoleni = ["Emīls", "Natālija", "Edijs", "Edgars"];

function paraditSkolenusLapa() {
  let teksts = ""; // "" - teksts , skaitlis(0;1;2) - skaitlis

  for (let i = 0; i < skoleni.length; i = i + 1) {
    teksts = teksts + skoleni[i] + " ir " + (i + 1) + ". skolēns<br>";
  }
  document.getElementById("skolenuvardi").innerHTML = teksts;
}

paraditSkolenusLapa();

document.getElementById("pievienot-poga").addEventListener("click", () => {
  skoleni.push(document.getElementById("pievienot-vardu").value);

  paraditSkolenusLapa();

  document.getElementById("skolenuvardi").innerHTML =
    teksts + document.getElementById("pievienot-vardu").value;

  teksts = teksts + document.getElementById("pievienot-vardu").value;

  document.getElementById("skolenuvardi").innerHTML = teksts;

  console.log(skoleni);
});
