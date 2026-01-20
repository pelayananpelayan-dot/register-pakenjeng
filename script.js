// ----------------------
// Ganti URL ini dengan SheetDB masing-masing register
// ----------------------
const SHEET_API = {
  sktm: 'https://sheetdb.io/api/v1/YOUR_SKTM_ID',
  skck: 'https://sheetdb.io/api/v1/YOUR_SKCK_ID',
  bank: 'https://sheetdb.io/api/v1/YOUR_BANK_ID',
  proposal: 'https://sheetdb.io/api/v1/YOUR_PROPOSAL_ID',
  waris: 'https://sheetdb.io/api/v1/YOUR_WARIS_ID',
  nikah: 'https://sheetdb.io/api/v1/YOUR_NIKAH_ID',
  surat: 'https://sheetdb.io/api/v1/YOUR_SURAT_ID',
  dll: 'https://sheetdb.io/api/v1/YOUR_DLL_ID'
};

let currentRegister = 'sktm';

// ----------------------
// Generate form fields
// ----------------------
const FIELDS = {
  sktm: ['Nomor_Surat','Tanggal','Nama','Pekerjaan','Alamat','Desa','Keperluan','Keterangan'],
  skck: ['Nomor_Surat','Tanggal','Nama','TTL','Alamat','Pendidikan','Pekerjaan','Keperluan','Keterangan'],
  bank: ['Nomor_Surat','Tanggal','Nama','Alamat','Pengajuan','Besaran','Persil','Luas','Blok'],
  proposal: ['Nomor_Surat','Tanggal','Atas_Nama','Alamat','Isi_Proposal','Keterangan'],
  waris: ['Nomor_Surat','Tanggal','Nama_Meninggal','Ahli_Waris','Alamat','Desa','Keperluan','Keterangan'],
  nikah: ['Nomor_Surat','Tanggal','Nama','Tgl_Lahir','Alamat','Nama_Ayah','Keterangan'],
  surat: ['Nomor_Surat','Tanggal','Nomor_Surat_Keluar','Pengirim_Tujuan','Perihal','Keterangan'],
  dll: ['Nomor_Surat','Tanggal','Nama','Alamat','Uraian','Keterangan']
};

// ----------------------
// Tampilkan register
// ----------------------
function showRegister(register){
  currentRegister = register;
  loadData();
}

// ----------------------
// Load data dari SheetDB
// ----------------------
async function loadData(){
  const res = await fetch(SHEET_API[currentRegister]);
  const data = await res.json();
  renderTable(data);
}

// ----------------------
// Render form + tabel
// ----------------------
function renderTable(data){
  const container = document.getElementById('contentContainer');
  container.innerHTML = `
    <h3>${currentRegister.toUpperCase()}</h3>
    <form id="formRegister">
      ${FIELDS[currentRegister].map(f=>{
        return f.includes('Tanggal') ? `<input type="date" name="${f}" required>` : `<input name="${f}" placeholder="${f}" required>`;
      }).join('')}
      <button type="submit">Simpan</button>
    </form>
    <table border="1">
      <tr>
        <th>No</th>
        ${FIELDS[currentRegister].map(f=>`<th>${f}</th>`).join('')}
        <th>Aksi</th>
      </tr>
      ${data.map((row,i)=>`
        <tr>
          <td>${i+1}</td>
          ${FIELDS[currentRegister].map(f=>`<td contenteditable="true" onblur="updateRow(${row.id}, this, '${f}')">${row[f]||''}</td>`).join('')}
          <td><button onclick="deleteRow(${row.id})">Hapus</button></td>
        </tr>
      `).join('')}
    </table>
  `;

  document.getElementById('formRegister').addEventListener('submit', saveRow);
}

// ----------------------
// Simpan data baru
// ----------------------
async function saveRow(e){
  e.preventDefault();
  const form = e.target;
  const row = {};
  FIELDS[currentRegister].forEach(f => row[f] = form[f].value);
  await fetch(SHEET_API[currentRegister], {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({data: row})
  });
  form.reset();
  loadData();
}

// ----------------------
// Hapus data
// ----------------------
async function deleteRow(id){
  if(!confirm('Yakin hapus?')) return;
  await fetch(`${SHEET_API[currentRegister]}/${id}`, {method:'DELETE'});
  loadData();
}

// ----------------------
// Update data inline
// ----------------------
async function updateRow(id, el, column){
  const value = el.textContent;
  await fetch(`${SHEET_API[currentRegister]}/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({data:{[column]: value}})
  });
}

// Load default
showRegister('sktm');
