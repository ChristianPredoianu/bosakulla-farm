export default () => {
  var cc = initCookieConsent();

  // run plugin with your configuration
  cc.run({
    current_lang: 'se',
    autoclear_cookies: true, // default: false
    page_scripts: true, // default: false

    languages: {
      se: {
        consent_modal: {
          title: 'Vi använder cookies!',
          description:
            'Hej, den här webbplatsen använder nödvändiga kakor för att säkerställa dess korrekta funktion och spårningskakor för att förstå hur du interagerar med den. De senare kommer att ställas in endast efter samtycke.. <button type="button" data-cc="c-settings" class="cc-link">Låt mig välja</button>',
          primary_btn: {
            text: 'Acceptera',
            role: 'accept_all', // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: 'Neka',
            role: 'accept_necessary', // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: 'Cookie inställningar',
          save_settings_btn: 'Spara',
          accept_all_btn: 'Acceptera alla',
          reject_all_btn: 'Neka alla',
          close_btn_label: 'Stäng',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Domain' },
            { col3: 'Expiration' },
            { col4: 'Description' },
          ],
          blocks: [
            {
              title: 'Cookie användning 📢',
              description:
                'Jag använder cookies för att säkerställa grundläggande funktionalitet på webbplatsen och för att förbättra din onlineupplevelse. Du kan välja att godkänna/avslå varje kategori när du vill. För mer information om cookies och annan känslig data, vänligen läs den fullständiga <a href="privacy.html" class="cc-link">policy</a>.',
            },
            {
              title: 'Nödvändiga cookies',
              description:
                'Dessa cookies är nödvändiga för att min webbplats ska fungera korrekt. Utan dessa cookies skulle webbplatsen inte fungera som den ska.',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: 'Prestanda- och analyscookies',
              description:
                'Dessa cookies tillåter webbplatsen att komma ihåg de val du har gjort tidigare.',
              toggle: {
                value: 'analytics', // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: '^_ga', // match all cookies starting with "_ga"
                  col2: 'google.com',
                  col3: '2 years',
                  col4: 'description ...',
                  is_regex: true,
                },
                {
                  col1: '_gid',
                  col2: 'google.com',
                  col3: '1 day',
                  col4: 'description ...',
                },
              ],
            },

            {
              title: 'Mer info',
              description:
                'För eventuella frågor angående vår cookiepolicy och dina val, vänligen <a class="cc-link" href="#footer-section">Kontakt</a>.',
            },
          ],
        },
      },
    },
    gui_options: {
      consent_modal: {
        layout: 'cloud', // box/cloud/bar
        position: 'bottom center', // bottom/middle/top + left/right/center
        transition: 'slide', // zoom/slide
        swap_buttons: false, // enable to invert buttons
      },
      settings_modal: {
        layout: 'box', // box/bar
        // position: 'left',           // left/right
        transition: 'slide', // zoom/slide
      },
    },
  });
};
