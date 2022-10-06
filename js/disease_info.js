var disease = localStorage.getItem("disease");
if (disease === "Fabry") {
  $("#disease").append(
    `
    <div class="normal-heading">Fabry Disease</div>
    <div class="left-home" id="disease">
      Fabry disease is caused by the lack of an enzyme needed to metabolize
      lipids, which are fat-like substances that include oils, waxes, and
      fatty acids. The deficiency of this enzyme causes insufficient breakdown
      of lipids, which build up to harmful levels in the eyes, kidneys,
      autonomic nervous system, and cardiovascular system. As the gene that is
      altered is carried on a mother's X chromosome, her sons have a 50
      percent chance of Fabry disease inheritance, and her daughters have a 50
      percent chance of being a carrier. Fabry disease is classified into two
      types: Classic and Late onset. Classic Fabry disease, which is the less
      common form, typically manifests in childhood, while late onset Fabry
      disease, as its name suggests, usually begins with symptoms in the 30s
      or 40s. The estimated prevalence of FD is 1/40 000 to 1/117 000 live
      births globally. The incidence of Fabry disease in India is likely to be
      higher because of the tradition of consanguineous marriage in some parts
      of the country.
    </div>
    <div class="normal-heading">Symptoms</div>
    <div class="left-home">
      <ul type="square" style="margin-bottom: 20px; margin-left: 20px">
        <li>
          Burning sensation in the hands that gets worse with exercise and hot
          weather.
        </li>
        <li>Small, raised reddish-purple blemishes on the skin.</li>
        <li>
          Some patients also have eye manifestations, especially cloudiness of
          the cornea.
        </li>
        <li>
          Lipid storage may lead to impaired arterial circulation and
          increased risk of heart attack or stroke.
        </li>
        <li>
          The heart may also become enlarged and the kidneys may become
          progressively involved.
        </li>
      </ul>
    </div>
    `
  );
} else if (disease === "Pompe") {
  $("#disease").append(
    `
    <div class="normal-heading">Pompe Disease</div>
    <div class="left-home">
      Pompe disease is an inherited disorder caused by the buildup of a
      complex sugar called glycogen in the body's cells. The accumulation of
      glycogen in certain organs and tissues, especially muscles, impairs
      their ability to function normally. Pompe is caused by mutations in the
      GA gene, which provides instructions for making an enzyme called acid
      alpha-glucosidase (also known as acid maltase). The deficiency of this
      enzyme hampers the breakdown of a complex sugar molecule called glycogen
      into a simple sugar molecule called glucose, which cells can wise to
      produce energy. The disease is also known as acid alpha-glucosidase
      deficiency, acid maltase deficiency, or glycogen storage disease type 2.
      Types and Symptoms of Pompe Researchers have described three types of
      Pompe, which differ in severity and the age at which they appear:
      <br />
      • classic infantile-onset<br />
      • non-classic infantile-onset<br />
      • late-onset
    </div>
    <div class="normal-heading">Symptoms</div>
    <div class="left-home">
      <ul
        type="square"
        style="margin-bottom: 20px; margin-left: 20px; text-align: center"
      >
        The symptoms of classic form of infantile-onset Pompe appear within a
        few months of birth. Infants with this disorder typically experience
        muscle weakness (myopathy), poor muscle tone (hypotonia), an enlarged
        liver (hepatomegaly), and heart defects. Affected infants may also
        fail to gain weight and grow at the expected rate (failure to thrive)
        and have breathing problems. If untreated, this form of Pompe leads to
        death from heart failure in the first year of life.<br />
        The symptoms of non-classic infantile-onset Pomp usually appear by age
        1. This type is characterized by delayed motor skills (such as rolling
        over and sitting) and progressive muscle weakness. The heart may be
        abnormally large (cardiomegaly), but affected individuals usually do
        not experience heart failure. The muscle weakness in this disorder
        leads to serious breathing problems, and most children with
        non-classic infantile-onset Pompe live only into early childhood.<br />
        The symptoms of late-onset Pompe disease may not become apparent until
        later in childhood, adolescence, or adulthood. Muscle weakness,
        especially in the torso and legs, is well-known in this form of the
        disorder. Patients may develop a waddling or swaying gait, and find it
        difficult to stand, run, or climb stairs. Spinal muscular weakness may
        lead to scoliosis (a sideways curvature of the spine), especially in
        adolescents. Patients may also experience muscle cramps, headaches and
        fatigue. Respiratory problems, caused by weakness in the muscles used
        for breathing, may also develop.
      </ul>
    </div>
    `
  );
} else {
  $("#disease").append(
    `
    <div class="normal-heading">Sickle Cell Disease</div>
    <div class="left-home">
      Sickle cell disease (SCD) is a group of inherited red blood cell
      disorders. Red blood cells contain hemoglobin, a protein that carries
      oxygen. Healthy red blood cells are round, and they move through small
      blood vessels to carry oxygen to all parts of the body. In someone who
      has SCD, the hemoglobin is abnormal, which causes the red blood cells to
      become hard and sticky and look like a C-shaped farm tool called a
      “sickle.” The sickle cells die early, which causes a constant shortage
      of red blood cells. Also, when they travel through small blood vessels,
      they get stuck and clog the blood flow. This can cause pain and other
      serious complications (health problems) such as infection, acute chest
      syndrome and stroke.
    </div>
    <div class="normal-heading">Symptoms</div>
    <div class="left-home">
      <ul type="square" style="margin-bottom: 20px; margin-left: 20px">
        <li>
          Anemia:- Sickle cells break apart easily and die. Red blood cells
          usually live for about 120 days before they need to be replaced. But
          sickle cells typically die in 10 to 20 days, leaving a shortage of
          red blood cells (anemia). Without enough red blood cells, the body
          can't get enough oxygen and this causes fatigue.
        </li>
        <li>
          Episodes of pain:- Periodic episodes of extreme pain, called pain
          crises, are a major symptom of sickle cell anemia. Pain develops
          when sickle-shaped red blood cells block blood flow through tiny
          blood vessels to your chest, abdomen and joints.
        </li>
        <li>
          Swelling of Hands and Feet:- The swelling is caused by sickle-shaped
          red blood cells blocking blood circulation in the hands and feet.
        </li>
        <li>
          Frequent infections:- Sickle cells can damage the spleen, increasing
          vulnerability to infections.
        </li>
        <li>
          Delayed growth or puberty:- Red blood cells provide the body with
          the oxygen and nutrients needed for growth.
        </li>
        <li>
          Vision problems:- Tiny blood vessels that supply the eyes can become
          plugged with sickle cells.
        </li>
      </ul>
    </div>
    `
  );
}
