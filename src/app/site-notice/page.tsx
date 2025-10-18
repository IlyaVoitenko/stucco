import styles from "./styles.module.scss";

export default function SiteNotice() {
  return (
    <main className={styles.container}>
      <h1>Impressum</h1>
      <br />

      <p>Angaben gemäß § 5 TMG: Stuckwerkstatt Voitenko </p>
      <p>Inhaber: Oleksandr Voitenko</p>
      <p>Adresse: Berliner str 23A, 19300, Grabow</p>
      <br />
      <p>Kontakt</p>
      <p>Telefon: +491639252077</p>
      <p>E-Mail: stuckwerkstattvoitenko@gmail.com</p>
      <br />

      <p> Umsatzsteuer-ID: [DE...]</p>
      {/* (сюда немецкий налоговый номер, если есть; если
      нет — убери эту строку)  */}
      <p> Handelsregister:</p>
      {/* [Registergericht, HRB-Nummer] */}
      {/* (сюда данные из торгового реестра, если есть; если у тебя
      Einzelunternehmen без Handelsregister — убери эту строку) */}
      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Oleksandr Voitenko,
        Adresse: Berliner str 23A, 19300, Grabow
      </p>
      {/* [Name, Anschrift] (сюда снова твое имя и адрес, как выше) */}
    </main>
  );
}
