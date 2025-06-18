// Data materi untuk setiap pertemuan
const materiData = {
  1: {
    title: "Pengenalan Grafika Komputer",
    icon: "fas fa-play-circle",
    content: `
            <h3>Pengertian Komputer Grafik</h3>
            <p>Komputer grafik adalah ilmu dan seni berkomunikasi secara visual melalui tampilan komputer dan perangkat interaksinya. Aspek visual komunikasi biasanya dalam arah komputer-ke-manusia.</p>
            
            <h3>Sejarah Komputer Grafik</h3>
            <ul>
                <li><strong>Fase Pertama (1950-1960):</strong> Tampilan grafis komputer Vectorscope pada komputer di MIT</li>
                <li><strong>Fase Kedua (1960-1970):</strong> Sistem komunikasi grafis manusia-mesin</li>
                <li><strong>Fase Ketiga (1970-1980):</strong> Konsep algoritma Z-buffer dan pemetaan tekstur</li>
                <li><strong>Fase Keempat (1980-1990):</strong> Penggunaan luas animasi grafik 3D</li>
            </ul>
            
            <h3>Aplikasi Komputer Grafik</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-palette"></i></div>
                    <h4>Computer Art</h4>
                    <p>Seni rupa dan komersial, desain logo, kartun</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-drafting-compass"></i></div>
                    <h4>CAD</h4>
                    <p>Perancangan bangunan, mobil, pesawat terbang</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-chart-bar"></i></div>
                    <h4>Presentation Graphics</h4>
                    <p>Laporan data keuangan, statistik, grafik batang</p>
                </div>
            </div>
            
            <h3>Pengertian Pixel</h3>
            <p>Pixel adalah unit terkecil dari gambar atau grafik digital yang dapat ditampilkan dan direpresentasikan pada perangkat tampilan digital. Pixel adalah unit logika dasar dalam grafik digital.</p>
        `,
  },
  2: {
    title: "Titik dan Palet Warna",
    icon: "fas fa-palette",
    content: `
            <h3>Membaca dan Menulis Pixel</h3>
            <p>Piksel adalah satu titik data dalam gambar digital atau di monitor. Pengukuran PPI menunjukkan jumlah piksel yang terkandung dalam gambar atau layar.</p>
            
            <h3>Membuat Palet Warna</h3>
            <p>Palet warna adalah suatu himpunan warna akan disusun dan dicampur hingga menjadikan kombinasi warna yang sangat indah.</p>
            
            <div class="algorithm-demo">
                <h4>Model Warna RGB</h4>
                <p>Model warna RGB adalah model warna aditif dimana warna merah, hijau dan biru dicampur bersama dalam berbagai proporsi untuk membentuk susunan warna yang berbeda.</p>
                <div class="infografis-container">
                    <div class="infografis-card">
                        <div class="infografis-icon" style="color: #ff0000;"><i class="fas fa-circle"></i></div>
                        <h4>Red (Merah)</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%; background: #ff0000;"></div>
                        </div>
                    </div>
                    <div class="infografis-card">
                        <div class="infografis-icon" style="color: #00ff00;"><i class="fas fa-circle"></i></div>
                        <h4>Green (Hijau)</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%; background: #00ff00;"></div>
                        </div>
                    </div>
                    <div class="infografis-card">
                        <div class="infografis-icon" style="color: #0000ff;"><i class="fas fa-circle"></i></div>
                        <h4>Blue (Biru)</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 100%; background: #0000ff;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>Model Warna HSV</h3>
            <p>Dalam model warna HSV, warna ditentukan oleh hue (H), saturation (S) dan value (V), lebih menyerupai persepsi warna manusia.</p>
            <ul>
                <li><strong>Hue (H):</strong> Diberikan sebagai sudut pada lingkaran berwarna (0°-360°)</li>
                <li><strong>Saturation (S):</strong> Dinyatakan sebagai persentase (0%-100%)</li>
                <li><strong>Value (V):</strong> Tingkat kecerahan (0%-100%)</li>
            </ul>
        `,
  },
  3: {
    title: "Algoritma Garis dan Poligon",
    icon: "fas fa-vector-square",
    content: `
            <h3>Algoritma Pembentukan Garis</h3>
            <p>Garis adalah sebuah kumpulan titik. Untuk membuat sebuah garis lurus, hal utama yang perlu diketahui adalah posisi titik awal dan titik akhir dari garis tersebut.</p>
            
            <h3>Algoritma Brute Force</h3>
            <div class="algorithm-demo">
                <p>Algoritma ini menggunakan persamaan garis y = mx + c untuk menghitung posisi setiap pixel.</p>
                <div class="code-block">
// Algoritma Brute Force
1. Tentukan titik akhir (x₁,y₁) dan (x₂,y₂)
2. Hitung kemiringan m = (y₂-y₁)/(x₂-x₁)
3. N = x₂-x₁+1
4. Untuk setiap x dari x₁ ke x₂:
   y = m(x-x₁) + y₁
   Gambar titik (x, round(y))
                </div>
            </div>
            
            <h3>Algoritma DDA (Digital Differential Analyzer)</h3>
            <div class="algorithm-demo">
                <p>Algoritma DDA dapat digunakan untuk menghitung dengan semua kemiringan garis.</p>
                <div class="code-block">
// Algoritma DDA
1. dx = x₂ - x₁, dy = y₂ - y₁
2. step = max(|dx|, |dy|)
3. x_inc = dx/step, y_inc = dy/step
4. x = x₁, y = y₁
5. Untuk i = 0 sampai step:
   Gambar titik (round(x), round(y))
   x = x + x_inc
   y = y + y_inc
                </div>
            </div>
            
            <h3>Algoritma Bresenham</h3>
            <p>Algoritma Bresenham mengoptimalkan kualitas gambar garis khususnya dalam raster graphics tanpa menggunakan floating point arithmetic.</p>
            
            <h3>Membuat Poligon</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-draw-polygon"></i></div>
                    <h4>Scan Line Algorithm</h4>
                    <p>Pengisian warna dalam poligon melalui scan horizontal</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-fill-drip"></i></div>
                    <h4>Boundary Fill</h4>
                    <p>Pengisian warna dimulai dari titik dalam poligon</p>
                </div>
            </div>
        `,
  },
  4: {
    title: "Algoritma Lingkaran dan Elips",
    icon: "fas fa-circle",
    content: `
            <h3>Algoritma Pembentukan Lingkaran</h3>
            <p>Lingkaran merupakan kumpulan titik-titik yang menyebar serta mempunyai jarak dengan titik pusat yang serupa pada semua titik yang tersebar tersebut.</p>
            
            <div class="algorithm-demo">
                <h4>Persamaan Lingkaran</h4>
                <p>Persamaan lingkaran dengan titik pusat (xₚ,yₚ) dan jari-jari r:</p>
                <div class="code-block">
(x - xₚ)² + (y - yₚ)² = r²
                </div>
            </div>
            
            <h3>Simetris Delapan Titik</h3>
            <p>Penggambaran lingkaran kurva bisa dimulai dari penentuan dimana letak titik awal (x,y) yang ada di lingkaran, sehingga titik-titik lainnya dapat ditentukan menggunakan 8 titik simetris:</p>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-circle-notch"></i></div>
                    <h4>8 Titik Simetris</h4>
                    <p>(x,y), (-x,y), (x,-y), (-x,-y)<br>(y,x), (-y,x), (y,-x), (-y,-x)</p>
                </div>
            </div>
            
            <h3>Midpoint Algorithm</h3>
            <div class="algorithm-demo">
                <p>Algoritma lingkaran Bresenham atau Midpoint Algorithm:</p>
                <div class="code-block">
// Midpoint Circle Algorithm
1. Pilih r dan titik pusat (xₚ,yₚ)
2. Set (x₀,y₀) = (0,r)
3. Hitung p₀ = 1 - r
4. Untuk setiap xₖ:
   if pₖ < 0:
     titik berikutnya (xₖ+1,yₖ)
     pₖ₊₁ = pₖ + 2xₖ₊₁ + 1
   else:
     titik berikutnya (xₖ+1,yₖ-1)
     pₖ₊₁ = pₖ + 2xₖ₊₁ + 1 - 2yₖ₊₁
                </div>
            </div>
            
            <h3>Algoritma Pembentukan Elips</h3>
            <p>Bentuk elips adalah salah satu bentuk modifikasi dari bangun dasar lingkaran dengan menambahkan minor dan mayor axis.</p>
            
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-circle"></i></div>
                    <h4>Lingkaran</h4>
                    <p>rx = ry</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 100%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-ellipsis-h"></i></div>
                    <h4>Elips</h4>
                    <p>rx ≠ ry</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                </div>
            </div>
        `,
  },
  5: {
    title: "Algoritma Pembuatan Kurva",
    icon: "fas fa-bezier-curve",
    content: `
            <h3>Kurva</h3>
            <p>Dalam matematika sebuah kurva adalah suatu objek geometri yang merupakan satu dimensi dan kontinyu. Kurva merupakan suatu titik yang dibentuk dengan garis sehingga membentuk suatu lengkungan.</p>
            
            <h3>Jenis-jenis Kurva</h3>
            <ul>
                <li><strong>Kurva linier:</strong> kurva yang dibentuk dari suatu garis antara 2 buah titik yang saling berhubungan</li>
                <li><strong>Kurva kubik:</strong> kurva yang memiliki persamaan ax³+bx²+cx+d</li>
                <li><strong>Kurva Bezier:</strong> kurva yang proses pembentukannya dari kurva linier, kurva kubik, kuadrat</li>
            </ul>
            
            <h3>Algoritma Bezier</h3>
            <div class="algorithm-demo">
                <p>Pierre Bezier adalah seorang ahli mesin perancis yang bekerja di perusahaan Renault. Algoritma Bezier digunakan untuk merancang badan mobil.</p>
                
                <h4>Pengertian Kurva Bezier</h4>
                <p>Kurva Bezier diterapkan di bidang grafika computer untuk menghasilkan kurva yang halus pada berbagai skala.</p>
                
                <div class="infografis-container">
                    <div class="infografis-card">
                        <div class="infografis-icon"><i class="fas fa-dot-circle"></i></div>
                        <h4>Titik Awal</h4>
                        <p>(x₀,y₀)</p>
                    </div>
                    <div class="infografis-card">
                        <div class="infografis-icon"><i class="fas fa-circle"></i></div>
                        <h4>Titik Kontrol</h4>
                        <p>(x₁,y₁), (x₂,y₂)</p>
                    </div>
                    <div class="infografis-card">
                        <div class="infografis-icon"><i class="fas fa-bullseye"></i></div>
                        <h4>Titik Akhir</h4>
                        <p>(x₃,y₃)</p>
                    </div>
                </div>
            </div>
            
            <h3>Persamaan Kurva Bezier</h3>
            <div class="algorithm-demo">
                <p>Persamaan kurva Bezier disusun berdasarkan persamaan polinomial Bernstein:</p>
                <div class="code-block">
// Persamaan Kurva Bezier dengan n titik kontrol
P(t) = Σ(i=0 to n) Pᵢ × Bᵢ,ₙ(t)

// Untuk kurva Bezier kubik (4 titik):
P(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃

// Parameter t dibatasi pada interval 0..1
                </div>
            </div>
            
            <h3>Contoh Perhitungan</h3>
            <p>Untuk menggambar titik-titik pada kurva Bezier, dilakukan perhitungan titik dari P₀ sampai dengan Pₙ dengan t dari 0 sampai dengan 1, dengan Δt yang bervariasi.</p>
        `,
  },
  6: {
    title: "Algoritma Pewarnaan Bidang",
    icon: "fas fa-fill-drip",
    content: `
            <h3>Pengertian Pewarnaan Bidang</h3>
            <p>Dalam teori graf, pewarnaan graf merupakan permasalahan spesial pelabelan graf; merupakan penugasan label yang secara tradisional disebut "warna" ke elemen grafik yang tunduk pada batasan tertentu.</p>
            
            <h3>Algoritma Pewarnaan Bidang</h3>
            <p>Terdapat 3 berbagai pewarnaan graf:</p>
            <ul>
                <li><strong>Pewarnaan simpul:</strong> memberikan warna pada simpul-simpul sesuatu graf</li>
                <li><strong>Pewarnaan sisi:</strong> memberikan warna pada sisi-sisi graf</li>
                <li><strong>Pewarnaan daerah (region):</strong> memberikan warna pada daerah-daerah graf</li>
            </ul>
            
            <h3>Algoritma Welch-Powell</h3>
            <div class="algorithm-demo">
                <p>Algoritma Welch-Powell adalah metode yang efektif untuk memberi warna suatu graf G.</p>
                <div class="code-block">
// Langkah-langkah Algoritma Welch-Powell:
1. Urutkan simpul-simpul dari G dalam urutan derajat yang menyusut
2. Pakai satu warna tertentu untuk memberi warna simpul awal
3. Secara berurut, tiap simpul dalam catatan yang tidak bertetangga 
   dengan simpul tadinya diwarnai dengan warna ini
4. Ulangi langkah 2 untuk simpul dengan urutan paling tinggi yang belum diwarnai
5. Ulangi langkah 3 hingga seluruh simpul dalam catatan terwarnai
                </div>
            </div>
            
            <h3>Pewarnaan pada Graf Bipartit</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-project-diagram"></i></div>
                    <h4>Graf Bipartit</h4>
                    <p>Bilangan kromatik = 2</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 40%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-sitemap"></i></div>
                    <h4>Graf Umum</h4>
                    <p>Bilangan kromatik ≥ 3</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                </div>
            </div>
            
            <h3>Pewarnaan Wilayah/Region pada Graf Bidang</h3>
            <p>Dua buah region dari sebuah graf bidang dikatakan bertetangga jika keduanya mempunyai sebuah sisi bersama.</p>
            
            <h3>Graf Dual dari Graf Planar</h3>
            <p>Dari suatu permasalahan pewarnaan region pada graf bidang, bisa kita bawa ke permasalahan pewarnaan simpul dengan membangun sebuah graf dual dari graf bidang tersebut.</p>
        `,
  },
  7: {
    title: "Proyeksi Geometri Bidang",
    icon: "fas fa-cube",
    content: `
            <h3>Pengertian Proyeksi Geometri</h3>
            <p>Proyeksi merupakan sebuah jenis transformasi, yaitu transformasi koordinat. Proyeksi adalah proses dimana informasi tentang suatu titik dalam sistem koordinat berdimensi-n ditransfer ke sistem koordinat dengan ukuran kurang dari n.</p>
            
            <h3>Taksonomi Proyeksi Geometri</h3>
            <p>Proyeksi geometri lapangan (PGL) dapat dibagi menjadi dua jenis:</p>
            <ul>
                <li><strong>Proyeksi paralel:</strong> jarak antara titik pusat proyeksi dan bidang proyeksi adalah tak terhingga</li>
                <li><strong>Proyeksi perspektif:</strong> jarak antara titik pusat proyeksi dan bidang proyeksi adalah berhingga (pasti)</li>
            </ul>
            
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrows-alt-h"></i></div>
                    <h4>Proyeksi Paralel</h4>
                    <p>Garis proyeksi sejajar</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-eye"></i></div>
                    <h4>Proyeksi Perspektif</h4>
                    <p>Garis proyeksi bertemu di satu titik</p>
                </div>
            </div>
            
            <h3>Proyeksi Paralel</h3>
            <div class="algorithm-demo">
                <h4>Proyeksi Orthographic</h4>
                <p>Proyeksi ortografik diperoleh jika sinar proyeksi tegak lurus dengan bidang proyeksi.</p>
                
                <h4>Proyeksi Axonometric</h4>
                <ul>
                    <li><strong>Isometrik:</strong> ketiga sumbu koordinat dipotong pada sudut yang sama</li>
                    <li><strong>Dimetrik:</strong> dua sumbu utama dipotong pada sudut yang sama</li>
                    <li><strong>Trimetrik:</strong> tiga sumbu utama memotong pada sudut yang berbeda</li>
                </ul>
                
                <h4>Proyeksi Oblique</h4>
                <p>Proyeksi miring dicapai karena balok proyeksi tidak tegak lurus dengan bidang proyeksi.</p>
            </div>
            
            <h3>Proyeksi Perspektif</h3>
            <p>Proyeksi perspektif memberikan perspektif yang lebih realistis daripada proyeksi ortografi. Objek yang tampak jauh akan tampak kecil, dan objek yang dekat akan tampak lebih besar.</p>
            
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-dot-circle"></i></div>
                    <h4>1 Titik Hilang</h4>
                    <p>Perspektif satu titik</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-circle"></i></div>
                    <h4>2 Titik Hilang</h4>
                    <p>Perspektif dua titik</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-bullseye"></i></div>
                    <h4>3 Titik Hilang</h4>
                    <p>Perspektif tiga titik</p>
                </div>
            </div>
        `,
  },
  8: {
    title: "Transformasi, Translasi dan Rotasi",
    icon: "fas fa-sync-alt",
    content: `
            <h3>Pengertian Transformasi</h3>
            <p>Grafik komputer adalah bidang yang diminati banyak orang. Salah satu sub bagian dari grafik komputer adalah pemodelan objek. Transformasi adalah operasi fungsional atau operasi transformasi geometris.</p>
            
            <h3>Tujuan Transformasi</h3>
            <ul>
                <li>Merubah atau menyesuaikan komposisi pemandangan</li>
                <li>Memudahkan membuat objek yang simetris</li>
                <li>Melihat objek dari sudut pandang yang berbeda</li>
                <li>Memindahkan satu atau beberapa objek dari satu tempat ke tempat lain</li>
            </ul>
            
            <h3>Translasi</h3>
            <div class="algorithm-demo">
                <p>Transformasi translasi adalah operasi yang menyebabkan objek 2D berpindah dari satu posisi ke posisi lain.</p>
                <div class="code-block">
// Rumus Translasi
x' = x + tx
y' = y + ty

// Dimana:
// (x,y) = titik asal sebelum translasi
// (x',y') = titik baru hasil translasi
// (tx,ty) = vektor translasi
                </div>
            </div>
            
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrow-right"></i></div>
                    <h4>Translasi X</h4>
                    <p>Pergeseran horizontal</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrow-up"></i></div>
                    <h4>Translasi Y</h4>
                    <p>Pergeseran vertikal</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrows-alt"></i></div>
                    <h4>Translasi XY</h4>
                    <p>Pergeseran diagonal</p>
                </div>
            </div>
            
            <h3>Rotasi</h3>
            <div class="algorithm-demo">
                <p>Rotasi adalah operasi memindahkan suatu objek pada titik tengah atau sumbu rotasi yang dipilih berdasarkan sudut rotasi tertentu.</p>
                <div class="code-block">
// Rumus Rotasi
x' = x cos θ - y sin θ
y' = x sin θ + y cos θ

// Matriks Rotasi
R = [cos θ  -sin θ]
    [sin θ   cos θ]

// Rotasi terhadap pivot point (xp,yp):
x' = xp + (x-xp)cos θ - (y-yp)sin θ
y' = yp + (x-xp)sin θ + (y-yp)cos θ
                </div>
            </div>
            
            <h3>Contoh Transformasi</h3>
            <p>Untuk segitiga dengan koordinat A(10,10), B(30,10) dan C(10,30) dengan translasi (tx,ty) = (10,20):</p>
            <ul>
                <li>A': (20,30)</li>
                <li>B': (40,30)</li>
                <li>C': (20,50)</li>
            </ul>
        `,
  },
  9: {
    title: "Dilatasi",
    icon: "fas fa-expand-arrows-alt",
    content: `
            <h3>Pengertian Dilatasi</h3>
            <p>Dilatasi adalah transformasi yang membuat mirror (pencerminan) dari image suatu objek. Image mirror untuk dilatasi 2D dibuat relatif terhadap sumbu dari dilatasi dengan memutar 180° terhadap dilatasi.</p>
            
            <h3>Jenis-jenis Dilatasi</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrows-alt-h"></i></div>
                    <h4>Dilatasi Sumbu X</h4>
                    <p>Refleksi terhadap sumbu horizontal</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-arrows-alt-v"></i></div>
                    <h4>Dilatasi Sumbu Y</h4>
                    <p>Refleksi terhadap sumbu vertikal</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-expand"></i></div>
                    <h4>Dilatasi Titik Asal</h4>
                    <p>Refleksi terhadap titik (0,0)</p>
                </div>
            </div>
            
            <h3>Matriks Dilatasi</h3>
            <div class="algorithm-demo">
                <div class="code-block">
// Dilatasi terhadap sumbu X
R = [1   0]
    [0  -1]

// Dilatasi terhadap sumbu Y  
R = [-1  0]
    [0   1]

// Dilatasi terhadap titik asal
R = [-1  0]
    [0  -1]
                </div>
            </div>
            
            <h3>Shear</h3>
            <p>Shear adalah bentuk transformasi yang membuat distorsi dari bentuk suatu objek, seperti menggeser sisi tertentu. Terdapat dua macam shear yaitu shear terhadap sumbu x dan shear terhadap sumbu y.</p>
            
            <div class="algorithm-demo">
                <h4>Shear terhadap sumbu X</h4>
                <div class="code-block">
// Matriks Shear X
S = [1   shx]
    [0    1]

// Koordinat transformasi
x' = x + shx.y
y' = y
                </div>
                
                <h4>Shear terhadap sumbu Y</h4>
                <div class="code-block">
// Matriks Shear Y
S = [1    0]
    [shy  1]

// Koordinat transformasi
x' = x
y' = shy.x + y
                </div>
            </div>
            
            <h3>Parameter Shear</h3>
            <p>Parameter shy dinyatakan dengan sembarang bilangan. Posisi koordinat kemudian berubah menurut arah vertikal atau horizontal tergantung jenis shear yang digunakan.</p>
        `,
  },
  10: {
    title: "Viewing dan Clipping",
    icon: "fas fa-crop-alt",
    content: `
            <h3>Viewing</h3>
            <p>Viewing adalah mekanisme formal untuk merender representasi gambar ke perangkat keluaran. Paket grafis memungkinkan pengguna untuk menentukan bagian mana dari gambar yang harus ditampilkan dan dimana bagian itu harus ditempatkan pada perangkat tampilan.</p>
            
            <h3>Struktur Viewing</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-window-maximize"></i></div>
                    <h4>Window</h4>
                    <p>Area koordinat dunia yang dipilih untuk ditampilkan</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-desktop"></i></div>
                    <h4>Viewport</h4>
                    <p>Area dari display device dimana window dipetakan</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-exchange-alt"></i></div>
                    <h4>Viewing Transformation</h4>
                    <p>Pemetaan bagian dari koordinat dunia ke koordinat device</p>
                </div>
            </div>
            
            <h3>Window to Viewport Transformation</h3>
            <div class="algorithm-demo">
                <p>Transformasi Window to Viewport adalah proses mengubah objek koordinat dunia 2D menjadi koordinat perangkat.</p>
                <div class="code-block">
// Transformasi Window to Viewport
sx = (xvmax - xvmin) / (xwmax - xwmin)
sy = (yvmax - yvmin) / (ywmax - ywmin)

xv = xvmin + (x - xwmin) * sx
yv = yvmin + (y - ywmin) * sy
                </div>
            </div>
            
            <h3>Clipping</h3>
            <p>Metode clipping adalah metode yang digunakan untuk menentukan garis yang perlu digambar atau tidak. Alasan dilakukannya clipping adalah untuk menghindari perhitungan koordinat pixel yang rumit dan interpolasi parameter.</p>
            
            <h3>Jenis-jenis Clipping</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-dot-circle"></i></div>
                    <h4>Point Clipping</h4>
                    <p>Clipping untuk titik</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-minus"></i></div>
                    <h4>Line Clipping</h4>
                    <p>Clipping untuk garis</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-draw-polygon"></i></div>
                    <h4>Polygon Clipping</h4>
                    <p>Clipping untuk poligon</p>
                </div>
            </div>
            
            <h3>Line Clipping</h3>
            <div class="algorithm-demo">
                <p>Line clipping diproses dengan inside-outside test dengan memeriksa endpoint dari garis tersebut.</p>
                <h4>Kondisi Garis terhadap Clipping Window:</h4>
                <ul>
                    <li><strong>Invisible:</strong> Tidak kelihatan, terletak di luar clipping window</li>
                    <li><strong>Visible:</strong> Terletak di dalam clipping window</li>
                    <li><strong>Half Partial:</strong> Terpotong sebagian oleh clipping window</li>
                    <li><strong>Full Partial:</strong> Terpotong penuh oleh clipping window</li>
                </ul>
            </div>
            
            <h3>Polygon Clipping</h3>
            <p>Pemotongan tidak hanya untuk simpul dan tepi poligon. Dalam hal objek yang akan dipotong adalah sebuah titik, satu-satunya operasi yang harus dilakukan adalah klasifikasi.</p>
        `,
  },
  11: {
    title: "Anti-Aliasing",
    icon: "fas fa-adjust",
    content: `
            <h3>Pengertian Anti-Aliasing</h3>
            <p>Line Thinning atau yang biasa disebut Anti Aliasing adalah teknik mengurangi jagged (tepi objek yang bergerigi) pada objek, agar dapat menampilkan resolusi tinggi pada resolusi yang lebih rendah.</p>
            
            <h3>Penyebab Aliasing</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-th"></i></div>
                    <h4>Pixel Grid</h4>
                    <p>Keterbatasan resolusi pixel</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-stairs"></i></div>
                    <h4>Jagged Edges</h4>
                    <p>Tepi objek yang bergerigi</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-eye"></i></div>
                    <h4>Visual Artifacts</h4>
                    <p>Gangguan visual pada gambar</p>
                </div>
            </div>
            
            <h3>Jenis-jenis Anti-Aliasing</h3>
            <div class="algorithm-demo">
                <h4>FXAA (Fast Approximate Anti Aliasing)</h4>
                <p>Digunakan untuk memproses bingkai (pada pinggir gambar) yang ditampilkan untuk mengurangi aliasing dengan relatif cepat, tetapi kelemahannya dapat membuat gambar menjadi kabur/buram.</p>
                
                <h4>MSAA (Multisampling Antialiasing)</h4>
                <p>Diterapkan hanya pada bagian pinggir gambar yang terlihat patah-patah, jadi bisa dibilang MSAA ini masih terdapat efek patah-patahnya karena yang diterapkan hanya pada pinggirnya saja.</p>
                
                <h4>TXAA (Temporal Antialiasing)</h4>
                <p>Sama seperti dengan MSAA dengan banyak macamnya. TXAA ini digunakan untuk menyempurnakan objek/gambar pada pinggir yang akan kita tampilkan sehingga gambar/objeknya terlihat sempurna.</p>
            </div>
            
            <h3>Interpolasi</h3>
            <p>Anti-aliasing adalah perkiraan data gambar menggunakan teknik yang disebut "Interpolasi." Interpolasi adalah istilah yang dibuat berdasarkan tren data yang ada, yaitu tebakan berpendidikan tentang apa yang sebenarnya ada di tempat itu jika lebih banyak titik data tersedia.</p>
            
            <h3>Penerapan Anti-Aliasing</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-gamepad"></i></div>
                    <h4>Video Games</h4>
                    <p>Meningkatkan kualitas visual game</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-font"></i></div>
                    <h4>Typography</h4>
                    <p>Menghaluskan tepi huruf</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-image"></i></div>
                    <h4>Image Processing</h4>
                    <p>Mengurangi artifacts pada gambar</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 85%;"></div>
                    </div>
                </div>
            </div>
            
            <h3>Kebutuhan Anti-Aliasing</h3>
            <p><strong>Untuk PC:</strong> Perlu, karena game PC biasanya dimainkan pada layar 15 inch ke atas untuk grafis yang halus. Penggunaan Anti-Aliasing ini sangat menggunakan kekuatan hardware.</p>
            <p><strong>Untuk HP (Mobile):</strong> Untuk HP yang notabene tidak punya cooler, Anti-Aliasing ini direkomendasikan untuk dimatikan saja karena akan membuat hardware HP bekerja keras dan akhirnya menjadi panas.</p>
        `,
  },
  12: {
    title: "Grafika 3 Dimensi",
    icon: "fas fa-cube",
    content: `
            <h3>Konsep Grafika 3D</h3>
            <p>Grafika komputer dalam aplikasinya terbagi menjadi 2:</p>
            <ul>
                <li><strong>Grafika 2D:</strong> Aplikasi 2D banyak dipakai dalam pembuatan grafik, peta, kreasi 2D yang banyak membantu pemakai dalam membuat visualisasi</li>
                <li><strong>Grafika 3D:</strong> Memiliki kemampuan untuk membuat visualisasi dari sebuah benda yang nyata yang dapat dilihat dari berbagai sudut pandang</li>
            </ul>
            
            <h3>System Koordinat 3D</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-dot-circle"></i></div>
                    <h4>Titik (Point)</h4>
                    <p>Posisi (x,y,z)</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-minus"></i></div>
                    <h4>Garis (Line)</h4>
                    <p>Dua titik (x₁,y₁,z₁) dan (x₂,y₂,z₂)</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-square"></i></div>
                    <h4>Bidang (Plane)</h4>
                    <p>Ax + By + Cz + D = 0</p>
                </div>
            </div>
            
            <h3>Representasi Object 3D</h3>
            <div class="algorithm-demo">
                <h4>Dengan Persamaan Geometri</h4>
                <p>Suatu object 3D dapat direpresentasikan langsung dengan menggunakan persamaan geometri dari object tersebut.</p>
                <div class="code-block">
// Contoh: Persamaan Bola
x² + y² + z² = r²

// atau
(x-a)² + (y-b)² + (z-c)² = r²
                </div>
                
                <h4>Dengan Constructive Solid Geometry (CSG)</h4>
                <p>CSG adalah suatu cara membentuk object dengan jalan menggabungkan atau memotong (mengurangi) dari beberapa object primitif 3D.</p>
                <ul>
                    <li><strong>Difference:</strong> Pengurangan objek</li>
                    <li><strong>Union:</strong> Penggabungan objek</li>
                    <li><strong>Intersect:</strong> Irisan objek</li>
                </ul>
            </div>
            
            <h3>Rendering</h3>
            <p>Rendering adalah proses akhir dari keseluruhan proses pemodelan ataupun animasi. Dalam rendering, semua data-data yang sudah dimasukkan dalam proses modeling, animasi, texturing, pencahayaan dengan parameter tertentu akan diterjemahkan dalam sebuah bentuk output.</p>
            
            <h3>Metode Rendering</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-project-diagram"></i></div>
                    <h4>Wireframe Rendering</h4>
                    <p>Objek 3D dideskripsikan sebagai objek tanpa permukaan</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-eye-slash"></i></div>
                    <h4>Hidden Line Rendering</h4>
                    <p>Menggunakan fakta bahwa dalam sebuah objek, terdapat permukaan yang tidak terlihat</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-sun"></i></div>
                    <h4>Shaded Rendering</h4>
                    <p>Melakukan berbagai perhitungan pencahayaan, karakteristik permukaan, shadow casting</p>
                </div>
            </div>
            
            <h3>Komponen Rendering</h3>
            <p>Secara umum, proses untuk menghasilkan rendering dua dimensi dari objek-objek 3D melibatkan 5 komponen utama:</p>
            <ol>
                <li><strong>Geometri:</strong>  Bentuk dan struktur objek 3D</li>
                <li><strong>Kamera:</strong> Sudut pandang dan posisi pengamatan</li>
                <li><strong>Cahaya:</strong> Sumber pencahayaan dan intensitas</li>
                <li><strong>Karakteristik Permukaan:</strong> Material dan tekstur objek</li>
                <li><strong>Algoritma Rendering:</strong> Metode perhitungan rendering</li>
            </ol>
            
            <h3>Sumber Cahaya dalam Grafika 3D</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-lightbulb"></i></div>
                    <h4>Point Light</h4>
                    <p>Memancar ke segala arah</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-search"></i></div>
                    <h4>Spotlight</h4>
                    <p>Memancarkan cahaya ke daerah tertentu dalam bentuk kerucut</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-sun"></i></div>
                    <h4>Directional Light</h4>
                    <p>Memancarkan cahaya dengan intensitas sama ke suatu arah tertentu</p>
                </div>
            </div>
        `,
  },
  13: {
    title: "Pemrograman Komputer Grafik Menggunakan API",
    icon: "fas fa-code",
    content: `
            <h3>Pengertian OpenGL</h3>
            <p>OpenGL awalnya disebut Open Graphics Library adalah Antarmuka pemrograman aplikasi (API) grafik 2D dan 3D yang dikembangkan oleh Silicon Graphics Inc. (SGI) untuk workstation Unix-nya.</p>
            
            <h3>Karakteristik OpenGL</h3>
            <ul>
                <li>Dirancang sebagai antarmuka yang efisien dan tidak bergantung pada perangkat keras</li>
                <li>Dapat diterapkan pada banyak platform perangkat keras yang berbeda</li>
                <li>Tidak ada perintah untuk melakukan tugas windowing atau mendapatkan input pengguna</li>
                <li>Tidak menyediakan perintah tingkat tinggi untuk mendeskripsikan model objek 3D</li>
            </ul>
            
            <h3>Langkah-langkah OpenGL</h3>
            <div class="algorithm-demo">
                <ol>
                    <li>Install Microsoft Visual Studio .NET pada komputer anda</li>
                    <li>Siapkan file OpenGL95.exe dan glut-3.7.6.zip pada direktori sementara</li>
                    <li>Masukan file header (.h) ke direktori include</li>
                    <li>Masukan file library (.lib) ke direktori lib</li>
                    <li>Masukan file DLL (.dll) ke direktori system</li>
                </ol>
            </div>
            
            <h3>Membuat Program OpenGL Sederhana</h3>
            <div class="algorithm-demo">
                <div class="code-block">
#include &lt;GL/glut.h&gt;

void display() {
    glClear(GL_COLOR_BUFFER_BIT);
    glBegin(GL_TRIANGLES);
        glVertex2f(-0.5, -0.5);
        glVertex2f(0.5, -0.5);
        glVertex2f(0.0, 0.5);
    glEnd();
    glFlush();
}

int main(int argc, char** argv) {
    glutInit(&argc, argv);
    glutCreateWindow("OpenGL Program");
    glutDisplayFunc(display);
    glutMainLoop();
    return 0;
}
                </div>
            </div>
            
            <h3>Pengenalan Pengolahan Citra Digital</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-image"></i></div>
                    <h4>Citra Biner</h4>
                    <p>2 warna: hitam dan putih (1 bit)</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-adjust"></i></div>
                    <h4>Citra Grayscale</h4>
                    <p>Skala keabuan (8 bit = 256 warna)</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-palette"></i></div>
                    <h4>Citra Warna</h4>
                    <p>True Color RGB (24 bit = 16 juta warna)</p>
                </div>
            </div>
            
            <h3>Elemen-elemen Citra Digital</h3>
            <ul>
                <li><strong>Kecerahan (Brightness):</strong> Intensitas cahaya yang dipancarkan pixel</li>
                <li><strong>Kontras (Contrast):</strong> Sebaran terang dan gelap dalam sebuah citra</li>
                <li><strong>Kontur (Contour):</strong> Keadaan yang ditimbulkan oleh perubahan intensitas pada pixel-pixel yang bertetangga</li>
                <li><strong>Warna (Colour):</strong> Persepsi yang ditangkap sistem visual terhadap panjang gelombang cahaya</li>
                <li><strong>Bentuk (Shape):</strong> Property intrinsik dari objek 3 dimensi</li>
                <li><strong>Tekstur (Texture):</strong> Distribusi spasial dari derajat keabuan dalam sekumpulan pixel-pixel yang bertetangga</li>
            </ul>
            
            <h3>Teknik-teknik Pengolahan Citra Digital</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-layer-group"></i></div>
                    <h4>Low-Level Processing</h4>
                    <p>Operasi dasar: noise reduction, image enhancement, image restoration</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-cut"></i></div>
                    <h4>Mid-Level Processing</h4>
                    <p>Segmentasi, deskripsi objek, klasifikasi objek</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-brain"></i></div>
                    <h4>High-Level Processing</h4>
                    <p>Analisis citra tingkat tinggi</p>
                </div>
            </div>
        `,
  },
  14: {
    title: "Aplikasi Grafika Komputer",
    icon: "fas fa-rocket",
    content: `
            <h3>Aplikasi Grafika Komputer</h3>
            <p>Contoh soal membuat aplikasi grafika komputer beserta pemrogramannya, gambarkan animasi menggunakan pemrograman Java 2D. Tambahkan menu label UAS.</p>
            
            <h3>Contoh Program Animasi Java 2D</h3>
            <div class="algorithm-demo">
                <p>Program animasi sederhana menggunakan Java 2D Graphics untuk membuat animasi orang berjalan:</p>
                <div class="code-block">
package UJIAN;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.geom.Ellipse2D;
import java.awt.geom.GeneralPath;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

public class animasi extends JPanel {
    Thread animasi, repaint;
    int x=10, y=10, a=10, batas=240;
    int xOrang=-100, yOrang=100, v=1;
    
    public animasi() {
        setPreferredSize(new Dimension(500,300));
        setFocusable(true);
        setBackground(Color.black);
        requestFocusInWindow();
        initThread();
        animasi.start();
        repaint.start();
    }
}
                </div>
            </div>
            
            <h3>Fitur Program Animasi</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-running"></i></div>
                    <h4>Animasi Orang</h4>
                    <p>Karakter orang yang bergerak dari kiri ke kanan</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-font"></i></div>
                    <h4>Teks Bergerak</h4>
                    <p>Teks yang berubah warna dan posisi secara acak</p>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-sync-alt"></i></div>
                    <h4>Threading</h4>
                    <p>Menggunakan multiple threads untuk animasi smooth</p>
                </div>
            </div>
            
            <h3>Komponen Grafika dalam Program</h3>
            <ul>
                <li><strong>Graphics2D:</strong> API untuk menggambar grafik 2D yang lebih advanced</li>
                <li><strong>BasicStroke:</strong> Mengatur ketebalan dan style garis</li>
                <li><strong>Ellipse2D:</strong> Membuat bentuk elips/lingkaran</li>
                <li><strong>GeneralPath:</strong> Membuat path kompleks untuk menggambar bentuk</li>
                <li><strong>Color:</strong> Mengatur warna objek</li>
                <li><strong>Font:</strong> Mengatur jenis dan ukuran font</li>
            </ul>
            
            <h3>Aplikasi Komputer Grafik Kedua</h3>
            <div class="algorithm-demo">
                <p>Program kedua membuat bentuk polygon dengan label "Komputer Grafik 1":</p>
                <div class="code-block">
public class uas extends JPanel {
    public uas() {
        this.setPreferredSize(new Dimension(300,250));
        this.setBackground(Color.WHITE);
    }
    
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;
        
        Polygon kotak = new Polygon();
        kotak.addPoint(10,10);
        kotak.addPoint(200,10);
        kotak.addPoint(200,110);
        kotak.addPoint(30,110);
        kotak.addPoint(10,125);
        kotak.addPoint(20,110);
        kotak.addPoint(10,110);
        
        g2.setColor(Color.yellow);
        g2.fill(kotak);
        g2.setColor(Color.black);
        g2.drawString("Komputer Grafik 1", 50, 50);
        g2.draw(kotak);
    }
}
                </div>
            </div>
            
            <h3>Bahan UAS</h3>
            <p>Buat tugas kelompok untuk membuat source code aplikasi grafika komputer dengan bahasa Python.</p>
            
            <h3>Latihan Pertemuan 14</h3>
            <div class="algorithm-demo">
                <p><strong>Soal:</strong> Buatlah tulisan "Selamat Datang Tangerang" dibingkai bulat dengan bahasa pemrograman Ruby.</p>
                
                <h4>Konsep Penyelesaian:</h4>
                <ul>
                    <li>Menggunakan library grafik Ruby seperti Ruby2D atau ChunkyPNG</li>
                    <li>Membuat canvas dengan ukuran yang sesuai</li>
                    <li>Menggambar lingkaran sebagai bingkai</li>
                    <li>Menambahkan teks di tengah lingkaran</li>
                    <li>Mengatur font, warna, dan posisi yang tepat</li>
                </ul>
            </div>
            
            <h3>Teknologi yang Dipelajari</h3>
            <div class="infografis-container">
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fab fa-java"></i></div>
                    <h4>Java 2D</h4>
                    <p>Graphics2D, Swing, Threading</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fab fa-python"></i></div>
                    <h4>Python</h4>
                    <p>Matplotlib, Pygame, PIL</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 85%;"></div>
                    </div>
                </div>
                <div class="infografis-card">
                    <div class="infografis-icon"><i class="fas fa-gem"></i></div>
                    <h4>Ruby</h4>
                    <p>Ruby2D, ChunkyPNG</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
        `,
  },
}

// Data untuk overview dan infografis
const overviewData = {
  title: "Overview Mata Kuliah",
  icon: "fas fa-chart-pie",
  content: `
        <h3>Mata Kuliah Komputer Grafik</h3>
        <p>Mata kuliah ini memberikan pemahaman komprehensif tentang konsep, algoritma, dan implementasi dalam bidang komputer grafik.</p>
        
        <div class="infografis-container">
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-book"></i></div>
                <h4>14 Pertemuan</h4>
                <p>Materi lengkap dari dasar hingga lanjutan</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 100%;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-calculator"></i></div>
                <h4>7 Algoritma Utama</h4>
                <p>Algoritma fundamental dalam grafika komputer</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-cube"></i></div>
                <h4>2D & 3D Graphics</h4>
                <p>Pemahaman grafika 2 dan 3 dimensi</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 90%;"></div>
                </div>
            </div>
        </div>
        
        <h3>Topik Utama yang Dipelajari</h3>
        <div class="infografis-container">
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-vector-square"></i></div>
                <h4>Algoritma Dasar</h4>
                <p>Garis, Lingkaran, Elips, Kurva Bezier</p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-fill-drip"></i></div>
                <h4>Pewarnaan</h4>
                <p>Algoritma pewarnaan bidang dan graf</p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-sync-alt"></i></div>
                <h4>Transformasi</h4>
                <p>Translasi, Rotasi, Scaling, Shear</p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-cube"></i></div>
                <h4>3D Graphics</h4>
                <p>Proyeksi, Rendering, Pencahayaan</p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-crop-alt"></i></div>
                <h4>Viewing & Clipping</h4>
                <p>Window-Viewport, Line Clipping</p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-code"></i></div>
                <h4>Implementasi</h4>
                <p>OpenGL, Java 2D, Python</p>
            </div>
        </div>
        
        <h3>Kompetensi yang Dicapai</h3>
        <ul>
            <li>Memahami konsep dasar grafika komputer</li>
            <li>Menguasai algoritma-algoritma fundamental</li>
            <li>Mampu mengimplementasikan aplikasi grafika</li>
            <li>Memahami transformasi geometri 2D dan 3D</li>
            <li>Menguasai teknik rendering dan pencahayaan</li>
            <li>Dapat menggunakan API grafika seperti OpenGL</li>
        </ul>
    `,
}

const infografisData = {
  title: "Infografis Komputer Grafik",
  icon: "fas fa-chart-bar",
  content: `
        <h3>Statistik Pembelajaran</h3>
        <div class="infografis-container">
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-clock"></i></div>
                <h4>Durasi Pembelajaran</h4>
                <p>14 Minggu × 3 SKS</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 100%;"></div>
                </div>
                <p><strong>42 Jam Pembelajaran</strong></p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-tasks"></i></div>
                <h4>Tingkat Kesulitan</h4>
                <p>Menengah ke Lanjutan</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 75%;"></div>
                </div>
                <p><strong>75% Complexity</strong></p>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-code"></i></div>
                <h4>Praktik Programming</h4>
                <p>Java, Python, OpenGL</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 85%;"></div>
                </div>
                <p><strong>85% Hands-on</strong></p>
            </div>
        </div>
        
        <h3>Distribusi Materi</h3>
        <div class="infografis-container">
            <div class="infografis-card">
                <div class="infografis-icon" style="color: #ff6b6b;"><i class="fas fa-circle"></i></div>
                <h4>Algoritma Dasar</h4>
                <p>35% dari total materi</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 35%; background: #ff6b6b;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon" style="color: #4ecdc4;"><i class="fas fa-circle"></i></div>
                <h4>Transformasi</h4>
                <p>25% dari total materi</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 25%; background: #4ecdc4;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon" style="color: #45b7d1;"><i class="fas fa-circle"></i></div>
                <h4>3D Graphics</h4>
                <p>25% dari total materi</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 25%; background: #45b7d1;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon" style="color: #f7b731;"><i class="fas fa-circle"></i></div>
                <h4>Implementasi</h4>
                <p>15% dari total materi</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 15%; background: #f7b731;"></div>
                </div>
            </div>
        </div>
        
        <h3>Timeline Pembelajaran</h3>
        <div class="algorithm-demo">
            <h4>Fase 1: Fundamental (Pertemuan 1-5)</h4>
            <ul>
                <li>Pengenalan Grafika Komputer</li>
                <li>Pixel dan Warna</li>
                <li>Algoritma Garis dan Poligon</li>
                <li>Algoritma Lingkaran dan Elips</li>
                <li>Kurva Bezier</li>
            </ul>
            
            <h4>Fase 2: Intermediate (Pertemuan 6-10)</h4>
            <ul>
                <li>Pewarnaan Bidang</li>
                <li>Proyeksi Geometri</li>
                <li>Transformasi 2D</li>
                <li>Dilatasi dan Shear</li>
                <li>Viewing dan Clipping</li>
            </ul>
            
            <h4>Fase 3: Advanced (Pertemuan 11-14)</h4>
            <ul>
                <li>Anti-Aliasing</li>
                <li>Grafika 3D</li>
                <li>OpenGL dan API</li>
                <li>Aplikasi Praktis</li>
            </ul>
        </div>
        
        <h3>Tools dan Teknologi</h3>
        <div class="infografis-container">
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fab fa-java"></i></div>
                <h4>Java</h4>
                <p>Graphics2D, Swing</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 90%;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fab fa-python"></i></div>
                <h4>Python</h4>
                <p>Matplotlib, PIL</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 80%;"></div>
                </div>
            </div>
            <div class="infografis-card">
                <div class="infografis-icon"><i class="fas fa-cube"></i></div>
                <h4>OpenGL</h4>
                <p>3D Graphics API</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 70%;"></div>
                </div>
            </div>
        </div>
    `,
}

// Initialize dashboard
document.addEventListener("DOMContentLoaded", () => {
  initializeMenu()
  setupEventListeners()
})

function initializeMenu() {
  const pertemuanMenu = document.getElementById("pertemuan-menu")

  // Generate menu items for each pertemuan
  for (let i = 1; i <= 14; i++) {
    const menuItem = document.createElement("div")
    menuItem.className = "menu-item"
    menuItem.setAttribute("data-content", i)

    const icon = materiData[i] ? materiData[i].icon : "fas fa-book"

    menuItem.innerHTML = `
            <i class="${icon}"></i>
            <span>Pertemuan ${i}</span>
        `

    pertemuanMenu.appendChild(menuItem)
  }
}

function setupEventListeners() {
  const menuItems = document.querySelectorAll(".menu-item")

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      menuItems.forEach((mi) => mi.classList.remove("active"))

      // Add active class to clicked item
      this.classList.add("active")

      // Get content type
      const contentType = this.getAttribute("data-content")

      // Load content
      loadContent(contentType)
    })
  })
}

function loadContent(contentType) {
  const contentTitle = document.getElementById("content-title")
  const contentBody = document.getElementById("content-body")
  const breadcrumb = document.getElementById("breadcrumb")

  let data

  if (contentType === "overview") {
    data = overviewData
    breadcrumb.innerHTML = "<span>Home</span> > <span>Overview</span>"
  } else if (contentType === "infografis") {
    data = infografisData
    breadcrumb.innerHTML = "<span>Home</span> > <span>Infografis</span>"
  } else {
    // Pertemuan content
    const pertemuanNum = Number.parseInt(contentType)
    data = materiData[pertemuanNum]
    breadcrumb.innerHTML = `<span>Home</span> > <span>Pertemuan ${pertemuanNum}</span>`
  }

  if (data) {
    contentTitle.innerHTML = `<i class="${data.icon}"></i> ${data.title}`
    contentBody.innerHTML = `
            <div class="content-card">
                ${data.content}
            </div>
        `

    // Animate progress bars
    setTimeout(() => {
      const progressBars = document.querySelectorAll(".progress-fill")
      progressBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })
    }, 300)
  }
}

// Add some interactive features
function addInteractiveFeatures() {
  // Add hover effects to infographic cards
  const cards = document.querySelectorAll(".infografis-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Call interactive features after content loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(addInteractiveFeatures, 500)
})
