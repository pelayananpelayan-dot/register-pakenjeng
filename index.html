<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Sistem Register Kecamatan Pakenjeng</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.29/jspdf.plugin.autotable.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body{font-family:'Poppins',sans-serif;margin:0;background:#f4f6f8;}
#loginPage{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#1f4fa3,#3a7bd5);}
.login-box{background:rgba(255,255,255,0.95);width:350px;padding:40px;border-radius:20px;box-shadow:0 15px 50px rgba(0,0,0,0.3);text-align:center;}
.login-box input{width:100%;padding:14px;margin:10px 0;border-radius:12px;border:1px solid #ccc;}
.login-box button{width:100%;padding:14px;background:#1f4fa3;color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:600;margin-top:10px;cursor:pointer;}
#app{display:none;}
header{text-align:center;background:#1f4fa3;color:#fff;padding:25px;}
nav{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;background:#fff;padding:12px;}
nav button{border:none;padding:8px 16px;border-radius:20px;background:#e6ecff;color:#1f4fa3;font-weight:bold;cursor:pointer;}
.container{padding:20px;max-width:1400px;margin:auto;}
.card{background:#fff;padding:20px;border-radius:14px;box-shadow:0 6px 15px rgba(0,0,0,.15);margin-bottom:30px;display:none;}
.form-head{display:flex;gap:20px;margin-bottom:15px;}
.form-head input{padding:8px;border-radius:10px;border:1px solid #ccc;width:auto;}
.export{text-align:center;margin:15px 0;}
.export button{margin:4px;padding:6px 14px;border:none;border-radius:20px;background:#1f4fa3;color:#fff;cursor:pointer;}
.table-wrapper{overflow-x:auto;background:#fff;padding:5px;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,0.1);}
table{width:100%;border-collapse:collapse;min-width:900px;table-layout:auto;background:#fff;}
th, td{border:1px solid #ccc;padding:8px;font-size:13px;white-space:nowrap;}
th{background:#e6ecff;}
td{text-align:center;}
td:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6), td:nth-child(7), td:nth-child(8), td:nth-child(9){text-align:left;}
td:last-child{text-align:center;}
.no-export{background:#ffecec;}
.fa-trash{cursor:pointer;}
@media print{nav,form,.export,.no-export{display:none}}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="loginPage">
  <div class="login-box">
    <h2>Login Admin</h2>
    <input id="user" placeholder="Username">
    <input id="pass" type="password" placeholder="Password">
    <button onclick="login()">MASUK</button>
    <p style="color:#888; font-size:12px; margin-top:12px;">© 2026 Kecamatan Pakenjeng</p>
  </div>
</div>

<!-- APP -->
<div id="app">
<header>
  <b>PEMERINTAH KABUPATEN GARUT</b><br>
  <span>KECAMATAN PAKENJENG</span><br>
  <small>SISTEM REGISTER SURAT</small>
</header>

<nav>
  <button onclick="show('sktm')">SKTM</button>
  <button onclick="show('skck')">SKCK</button>
  <button onclick="show('bank')">Kredit Bank</button>
  <button onclick="show('proposal')">Proposal</button>
  <button onclick="show('waris')">Ahli Waris</button>
  <button onclick="show('nikah')">Rekom Nikah</button>
  <button onclick="show('surat')">Surat Masuk/Keluar</button>
  <button onclick="show('dll')">Register Lainnya</button>
  <button onclick="logout()" style="background:#ffe1e1">Logout</button>
</nav>

<div class="container" id="content"></div>
</div>

<script>
/* LOGIN */
function login(){
  if(user.value==="admin" && pass.value==="admin123"){
    loginPage.style.display="none";
    app.style.display="block";
    show('sktm');
  } else alert("Username atau Password salah");
}
function logout(){location.reload();}

/* REGISTER SYSTEM */
let counter={};
function saveNumber(id, nomor){localStorage.setItem("nomor_"+id, nomor);}
function loadNumber(id){return parseInt(localStorage.getItem("nomor_"+id) || "1");}

/* BUAT REGISTER */
function buatRegister(id,judul,kode,kolom){
  let d=document.createElement('div'); 
  d.className='card'; 
  d.id=id;

  let savedNumber = loadNumber(id);

  d.innerHTML=`
    <h3 style="text-align:center">${judul}</h3>
    <div class="form-head">
      <input class="kode" value="${kode}">
      <input class="urut" value="${String(savedNumber).padStart(2,'0')}" style="width:70px">
      <input class="tahun" value="${new Date().getFullYear()}" style="width:90px">
    </div>

    <form onsubmit="simpan(event,'${id}')">
      ${kolom.map(k=>k==='Tanggal'?'<input type="date" required>':`<input placeholder="${k}" required>`).join('')}
      <button>Simpan</button>
    </form>

    <div class="export">
      <button onclick="exportExcel('${id}')">Excel</button>
      <button onclick="exportWord('${id}')">Word</button>
      <button onclick="exportPDF('${id}')">PDF</button>
      <button onclick="printTable('${id}')">Print</button>
    </div>

    <div class="table-wrapper">
      <table id="${id}Table">
        <tr>
          <th>No</th>
          <th>No Surat</th>
          ${kolom.map(k=>`<th>${k}</th>`).join('')}
          <th class="no-export">Aksi</th>
        </tr>
      </table>
    </div>
  `;
  content.appendChild(d);
  loadFromLocalStorage(id);
}

/* SHOW & FOKUS TANGGAL */
function show(id){
  document.querySelectorAll('.card').forEach(c=>c.style.display='none');
  let c=document.getElementById(id);
  c.style.display='block';
  let firstInput=c.querySelector('input[type=date]');
  if(firstInput) firstInput.focus();
}

/* SIMPAN */
function simpan(e,id){
  e.preventDefault();
  let t=document.getElementById(id+"Table");
  let c=e.target.closest('.card');

  if(!counter[id]) counter[id]=1;
  let urut = c.querySelector('.urut');
  let nomorUrut = parseInt(urut.value);
  saveNumber(id, nomorUrut+1);

  let rowData = [...e.target.querySelectorAll('input')].map(i=>i.value);
  let noSurat = `${c.querySelector('.kode').value}/${urut.value}/Kec.${c.querySelector('.tahun').value}`;

  let tr=document.createElement('tr');
  tr.innerHTML=`
    <td>${counter[id]}</td>
    <td>${noSurat}</td>
    ${rowData.map(d=>`<td>${d}</td>`).join('')}
    <td class="no-export"><i class="fa fa-trash" onclick="hapusRow(this,'${id}')"></i></td>
  `;
  t.appendChild(tr);

  counter[id]++;
  e.target.reset();
  urut.value = String(nomorUrut+1).padStart(2,'0');
  saveToLocalStorage(id);
}

/* HAPUS */
function hapusRow(el,id){
  el.closest("tr").remove();
  saveToLocalStorage(id);
}

/* LOCAL STORAGE */
function saveToLocalStorage(id){
  let table=document.getElementById(id+"Table");
  let data=[];
  table.querySelectorAll("tr:not(:first-child)").forEach(tr=>{
    let row=[];
    tr.querySelectorAll("td:not(.no-export)").forEach(td=>row.push(td.innerText));
    data.push(row);
  });
  localStorage.setItem("register_"+id, JSON.stringify(data));
}
function loadFromLocalStorage(id){
  let data=JSON.parse(localStorage.getItem("register_"+id)||"[]");
  let t=document.getElementById(id+"Table");
  counter[id]=data.length+1;
  data.forEach(row=>{
    let tr=document.createElement("tr");
    tr.innerHTML=row.map(d=>`<td>${d}</td>`).join("")+
    `<td class="no-export"><i class="fa fa-trash" onclick="hapusRow(this,'${id}')"></i></td>`;
    t.appendChild(tr);
  });
}

/* EXPORTS */
function exportExcel(id){
  let table=document.getElementById(id+"Table").cloneNode(true);
  table.querySelectorAll(".no-export").forEach(x=>x.remove());
  let blob=new Blob([table.outerHTML],{type:"application/vnd.ms-excel"});
  saveAs(blob,id+".xls");
}

function exportWord(id){
  let table=document.getElementById(id+"Table").cloneNode(true);
  table.querySelectorAll(".no-export").forEach(x=>x.remove());
  let footer=`<br><br><br><br>
    <div style="text-align:right;font-size:14px;">
      Pakenjeng, ................................... <br>
      Mengetahui, <br>
      an. Camat Pakenjeng <br><br><br><br>
      ...................................... <br>
      NIP. ..................................
    </div>`;
  let blob=new Blob([table.outerHTML+footer],{type:"application/msword"});
  saveAs(blob,id+".doc");
}

function exportPDF(id){
  let table=document.getElementById(id+"Table").cloneNode(true);
  table.querySelectorAll(".no-export").forEach(x=>x.remove());
  const { jsPDF } = jspdf;
  let pdf=new jsPDF('p','pt','a4');
  pdf.autoTable({html: table});
  let y=pdf.lastAutoTable.finalY + 40;
  pdf.text("Pakenjeng, .....................................",320,y);
  pdf.text("Mengetahui,",320,y+20);
  pdf.text("an. Camat Pakenjeng",320,y+35);
  pdf.text("",320,y+50); pdf.text("",320,y+65); pdf.text("",320,y+80); pdf.text("",320,y+95);
  pdf.text("......................................",320,y+110);
  pdf.text("NIP. .................................",320,y+125);
  pdf.save(id+".pdf");
}

function printTable(id){
  let table=document.getElementById(id+"Table").cloneNode(true);
  table.querySelectorAll(".no-export").forEach(x=>x.remove());
  let w=window.open();
  w.document.write('<html><head><title>Print</title></head><body>');
  w.document.write(table.outerHTML);
  w.document.write(`<br><br><br><br>
    <div style="text-align:right;font-size:14px;">
      Pakenjeng, .................................. <br>
      Mengetahui, <br>
      an. Camat Pakenjeng <br><br><br><br>
      .............................................<br>
      NIP. .................................
    </div>`);
  w.document.write('</body></html>');
  w.document.close();
  w.print();
}

/* REGISTER */
buatRegister('sktm','Register SKTM','400.9.14.1',['Tanggal','Nama','Pekerjaan','Alamat','Desa','Keperluan','Keterangan']);
buatRegister('skck','Register SKCK','300',['Tanggal','Nama','TTL','Alamat','Pendidikan','Pekerjaan','Keperluan','Keterangan']);
buatRegister('bank','Register Kredit Bank','500.3.4.5',['Tanggal','Nama','Alamat','Pengajuan','Besaran','Keterangan']);
buatRegister('proposal','Register Proposal','600',['Tanggal','Atas Nama','Alamat','Isi Proposal','Keterangan']);
buatRegister('waris','Register Ahli Waris','100.3.11.2',['Tanggal','Nama Meninggal','Ahli Waris','Alamat','Desa','Keperluan','Keterangan']);
buatRegister('nikah','Register Rekom Nikah','400.12.3.2',['Tanggal','Nama','Tgl Lahir','Alamat','Nama Ayah','Keterangan']);
buatRegister('surat','Register Surat','900',['Tanggal','Nomor Surat','Pengirim/Tujuan','Perihal','Keterangan']);
buatRegister('dll','Register Lainnya','999',['Tanggal','Nama','Alamat','Uraian','Keterangan']);
</script>

</body>
</html>
