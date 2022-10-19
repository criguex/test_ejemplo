// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
 
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '60s',
      stages: [
        { target: 20000, duration: '8m' },
      ],
      gracefulRampDown: '5m',
      exec: 'scenario_1',
    },
  },
}
export function scenario_1() {
const users = 
[
  'PS_VC007',
  'PS_VC007',
  'PS_MD031',
  'PS_MD030',
'PS_MD036',
'PS_VC012',
'PS_VC007',
'PS_VC004',
'PS_VC001',
'PS_VC018',
'PS_MD006',
'PS_VC008',
'PS_VC005',
'PS_VC009',
'PS_MD024',
'PS_VC022',
'PS_VC006',
'PS_VC014',
'PS_VC015',
'PS_VC016',
'PS_VC013',
'PS_VC017',
'PS_VC020',
'PS_VC019',
'PS_VC011',
'PS_VC002',
'PS_VC010',
'PS_VC003',
'PS_MD242'
]
users.forEach(function(user) {
  let response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/?launchpad=integramedica2&sap_client=300&sap_language=ES&sap-client=300&sap-language=ES',
    {
      'sap-accessibility': '',
      'sap-client': '300',
      'sap-password': 'inicio01',
      'sap-sessioncmd': 'open',
      'sap-system-login': 'onLogin',
      'sap-system-login-basic_auth': '',
      'sap-system-login-cookie_disabled': '',
      'sap-system-login-oninputprocessing': 'onLogin',
      'sap-urlscheme': '',
      'sap-user': user,
    },
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'content-type': 'application/x-www-form-urlencoded',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
   
  )
  console.log(response.status)
  sleep(3)
 
});


  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_desktop_int2?ajax_id=GET_USER_DATA&ajax_applid=NEPTUNE_LAUNCHPAD_DESKTOP_INT2&sap-client=300&uxp=400&field_id=00139&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_desktop_int2?ajax_id=LOGIN&sap-client=300&ajax_applid=NEPTUNE_LAUNCHPAD_DESKTOP_INT2&uxp=400&field_id=00521&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_desktop_int2?ajax_id=GET_APP_DATA&ajax_applid=NEPTUNE_LAUNCHPAD_DESKTOP_INT2&sap-client=300&uxp=400&field_id=00006&rfcdest=&ajax_value=undefined',
    '%5B%7B%22APPLID%22%3A%22NEPTUNE_LAUNCHPAD_MENU_INTE%22%2C%22LANGUAGE%22%3A%22%22%2C%22UPDDAT%22%3A%2220210122%22%2C%22UPDTIM%22%3A%22085521%22%2C%22INVALID%22%3Afalse%2C%22DESCR%22%3A%22%22%7D%2C%7B%22APPLID%22%3A%22Z_CITACION_AMBU%22%2C%22LANGUAGE%22%3A%22%22%2C%22UPDDAT%22%3A%2220210922%22%2C%22UPDTIM%22%3A%22070323%22%2C%22INVALID%22%3Afalse%2C%22DESCR%22%3A%22%22%7D%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_menu_inte?ajax_id=CHECK_MESSAGE&ajax_applid=NEPTUNE_LAUNCHPAD_MENU_INTE&sap-client=300&uxp=400&field_id=00142&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_menu_inte?ajax_id=GET_ENCUESTA&ajax_applid=NEPTUNE_LAUNCHPAD_MENU_INTE&sap-client=300&uxp=400&field_id=00156&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_menu_inte?ajax_id=GET_MENU_LIST&ajax_applid=NEPTUNE_LAUNCHPAD_MENU_INTE&sap-client=300&uxp=400&field_id=00044&rfcdest=&ajax_value=INTEGRAMEDICA2%7CD',
    '%7B%22TXT_HEADER%22%3A%22IntegraMedica%22%2C%22TXT_LIST%22%3A%22%22%2C%22ENABLE_LIST%22%3A%22%22%2C%22PARENT%22%3A%22%22%2C%22PREVIOUS%22%3A%22%22%2C%22DISP_MODE%22%3A%22%22%2C%22LIST_FULL_WIDTH%22%3A%22%22%2C%22LIST_NO_HEADER%22%3A%22%22%2C%22TILE_SIZE%22%3A%22%22%2C%22TILE_ALIGN_LEFT%22%3A%22%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(7.5)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_PAT_LIST&ajax_applid=Z_CITACION_AMBU&sap-client=300&uxp=400&field_id=00011&rfcdest=&ajax_value=undefined',
    '%7B%22DATEFROM%22%3A%2220220308%22%2C%22DATETO%22%3A%22%22%7D%7C%7C%7B%22EINRI%22%3A%22RED%22%2C%22ORGAU%22%3A%22IBA%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_PAT_LIST_NUM&sap-client=300&ajax_applid=Z_CITACION_AMBU&uxp=400&field_id=00480&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22ORGAU%22%3A%22IBA%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=REPOSITORIO&sap-client=300&ajax_applid=Z_CITACION_AMBU&uxp=400&field_id=00562&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_LYNN_CHAT&ajax_applid=Z_CITACION_AMBU&sap-client=300&uxp=400&field_id=00544&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(7.5)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_DTID_UO&ajax_applid=Z_CITACION_AMBU&sap-client=300&uxp=400&field_id=00482&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/Z_PACIENTE_AMBULANTE.view.js',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        accept: '*/*',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_desktop_int2?ajax_id=GET_APP_TIMESTAMP&ajax_applid=NEPTUNE_LAUNCHPAD_DESKTOP_INT2&sap-client=300&uxp=400&field_id=00450&rfcdest=&ajax_value=Z_PACIENTE_AMBULANTE',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_PAT_NUM&ajax_applid=Z_PACIENTE_AMBULANTE&sap-client=300&uxp=400&field_id=00268&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_SESSION&ajax_applid=Z_PACIENTE_AMBULANTE&sap-client=300&uxp=400&field_id=00279&rfcdest=&ajax_value=undefined',
    '%7B%7D%7C%7C%7B%22APPLID%22%3A%22ZPMD_Z_MEDCONS2%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=DOWNLOAD_RECIPE&ajax_applid=Z_PACIENTE_AMBULANTE&sap-client=300&uxp=400&field_id=00302&rfcdest=&ajax_value=undefined',
    '%7B%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_PATIENT_INFO&ajax_applid=Z_PACIENTE_AMBULANTE&sap-client=300&uxp=400&field_id=00180&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_PATIENT_HISTORY&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00166&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/ZPMD_Z_MEDCONS2.view.js',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        accept: '*/*',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(0.5)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/neptune_launchpad_desktop_int2?ajax_id=GET_APP_TIMESTAMP&ajax_applid=NEPTUNE_LAUNCHPAD_DESKTOP_INT2&sap-client=300&uxp=400&field_id=00450&rfcdest=&ajax_value=ZPMD_Z_MEDCONS2',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(0.5)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=FILL_DOM_DATA&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00626&rfcdest=&ajax_value=undefined',
    '%7B%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_PMD_DATA&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00592&rfcdest=&ajax_value=undefined',
    '%7B%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%7B%22TMNID%22%3A%220107463246%22%7D%7C%7C%7B%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(2.5)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_MOTICONSUL&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=01456&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_LIST&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=02466&rfcdest=&ajax_value=undefined',
    '%7B%22PATNR%22%3A%220014024887%22%2C%22PAPID%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDBEW%22%3A%2200001%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22APPLID_ORIG%22%3A%22%22%2C%22FILTER_CASE%22%3Afalse%2C%22ZZ_FILTER_DATE%22%3A%22%22%2C%22ZBB_OC_EMED%22%3A%22%22%2C%22ORGPF%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22PAPID%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDBEW%22%3A%2200001%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22APPLID_ORIG%22%3A%22%22%2C%22FILTER_CASE%22%3Afalse%2C%22ZZ_FILTER_DATE%22%3A%22%22%2C%22ZBB_OC_EMED%22%3A%22%22%2C%22ORGPF%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(8.2)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=UPDATE_STATUS_VC&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00368&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%2C%22LFDBEW%22%3A%2200001%22%2C%22RESEND_DOCS%22%3Atrue%7D%7C%7C%7B%22ACTION%22%3A%22OPEN_DOCTOR%22%2C%22TMNID%22%3A%220107463246%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_CHAT_TOKEN&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00398&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%2C%22LFDBEW%22%3A%2200001%22%2C%22RESEND_DOCS%22%3Atrue%7D%7C%7C%7B%22ACTION%22%3A%22OPEN_DOCTOR%22%2C%22TMNID%22%3A%220107463246%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(14.7)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_BUSQUEDA_DIAG&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01076&rfcdest=&ajax_value=undefined',
    '%7B%22ZTTXT%22%3A%22dolo%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(1.2)
 

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_BUSQUEDA_DIAG&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01076&rfcdest=&ajax_value=undefined',
    '%7B%22ZTTXT%22%3A%22dolor%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(2.7)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=UPDATE_DIAG_TABLE&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=00393&rfcdest=&ajax_value=undefined',
    '%5B%7B%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22UBICACION%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%7D%5D%7C%7C%7B%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(2.3)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=GET_DIAG_HISTORY&ajax_applid=Z_PACIENTE_AMBULANTE&sap-client=300&uxp=400&field_id=00172&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%2C%22LFDBEW%22%3A%2200001%22%2C%22RESEND_DOCS%22%3Atrue%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(25)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=SAVE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00590&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%7D%7C%7C%7B%22ACTIVE%22%3Atrue%2C%22CHANGES%22%3A%22%22%2C%22NEXT_STATUS%22%3A%22%22%2C%22ALLOW_SET_STATUS%22%3Atrue%2C%22ALLOW_RELEASE%22%3Atrue%2C%22CLOSE_SESSION_AT_ERROR%22%3Afalse%2C%22ZCLOSE_SESSION%22%3A%22%22%2C%22ZZ_MEDANTMORB_VERS%22%3A%22000%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(20.4)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=SAVE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00590&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%22ALIAS%22%3A%22%22%2C%22FUNCTION%22%3A%22%22%2C%22TAB_ALIAS%22%3A%22%22%2C%22LINE%22%3A0%7D%7C%7C%7B%22ACTIVE%22%3Atrue%2C%22CHANGES%22%3Atrue%2C%22NEXT_STATUS%22%3A%22%22%2C%22ALLOW_SET_STATUS%22%3Atrue%2C%22ALLOW_RELEASE%22%3Atrue%2C%22CLOSE_SESSION_AT_ERROR%22%3Afalse%2C%22ZCLOSE_SESSION%22%3A%22%22%2C%22ZZ_MEDANTMORB_VERS%22%3A%22000%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(4.8)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=SAVE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00590&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%22ALIAS%22%3A%22%22%2C%22FUNCTION%22%3A%22%22%2C%22TAB_ALIAS%22%3A%22%22%2C%22LINE%22%3A0%7D%7C%7C%7B%22ACTIVE%22%3Atrue%2C%22CHANGES%22%3Afalse%2C%22NEXT_STATUS%22%3A%22%22%2C%22ALLOW_SET_STATUS%22%3Atrue%2C%22ALLOW_RELEASE%22%3Atrue%2C%22CLOSE_SESSION_AT_ERROR%22%3Afalse%2C%22ZCLOSE_SESSION%22%3A%22%22%2C%22ZZ_MEDANTMORB_VERS%22%3A%22000%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(3.1)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=VC_PAYMENT&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00372&rfcdest=&ajax_value=undefined',
    '%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%7B%22TMNID%22%3A%220107463246%22%2C%22VC_SUCCESS%22%3Atrue%2C%22OBSERVACIONES%22%3A%22%22%2C%22OBSERVACIONES_PAC%22%3A%22%22%2C%22ACTION%22%3A%22OPEN_DOCTOR%22%2C%22CHAT_TOKEN%22%3A%22%22%2C%22VIDEO_TIME%22%3A%22000000%22%2C%22VIDEO_TIME_MAX%22%3A%22000000%22%2C%22COLGAR%22%3A%22%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=SAVE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00590&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%22ALIAS%22%3A%22%22%2C%22FUNCTION%22%3A%22%22%2C%22TAB_ALIAS%22%3A%22%22%2C%22LINE%22%3A0%7D%7C%7C%7B%22ACTIVE%22%3Atrue%2C%22CHANGES%22%3Afalse%2C%22NEXT_STATUS%22%3A%22%22%2C%22ALLOW_SET_STATUS%22%3Atrue%2C%22ALLOW_RELEASE%22%3Atrue%2C%22CLOSE_SESSION_AT_ERROR%22%3Afalse%2C%22ZCLOSE_SESSION%22%3A%22%22%2C%22ZZ_MEDANTMORB_VERS%22%3A%22000%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(2)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=VALIDAR_FIRMA&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=02650&rfcdest=&ajax_value=undefined',
    '%7B%22PATNR%22%3A%220014024887%22%2C%22PAPID%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDBEW%22%3A%2200001%22%2C%22ORGID%22%3A%22IBATMEGR%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22APPLID_ORIG%22%3A%22%22%2C%22FILTER_CASE%22%3Afalse%2C%22ZZ_FILTER_DATE%22%3A%22%22%2C%22ZBB_OC_EMED%22%3A%22%22%2C%22ORGPF%22%3A%22%22%2C%22KSSNAM%22%3A%22%22%7D%7C%7C%5B%5D%7C%7C%7B%22CHECK_LICMED%22%3A%22%22%2C%22CHECK_NOTIFGES%22%3A%22%22%2C%22CHECK_ORDCLI%22%3A%22%22%2C%22CHECK_RECMED%22%3A%22%22%2C%22CHECK_RECMAG%22%3A%22%22%2C%22CHECK_INDGYF%22%3A%22%22%2C%22CHECK_RESATENC%22%3Atrue%2C%22CHECK_CERTMED%22%3A%22%22%2C%22EMAIL%22%3A%22fabian.gomez%40bupa.cl%22%7D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=VC_SENDDOCS&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=02626&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22PAPID%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDBEW%22%3A%2200001%22%2C%22ORGID%22%3A%22IBATMEGR%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22APPLID_ORIG%22%3A%22%22%2C%22FILTER_CASE%22%3Afalse%2C%22ZZ_FILTER_DATE%22%3A%22%22%2C%22ZBB_OC_EMED%22%3A%22%22%2C%22ORGPF%22%3A%22%22%2C%22KSSNAM%22%3A%22%22%7D%7C%7C%5B%5D%7C%7C%7B%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22LINEA_NEG%22%3A%22VCO%22%2C%22COVID_POPUP%22%3A%22Recuerde%20notificar%20casos%20sospechosos%20en%20Epivigila%2C%5C%5Cn%20favor%20informar%20que%20el%20examen%20tiene%20un%20tiempo%20de%20entrega%20de%20hasta%2048%20horas.%22%2C%22TMNID%22%3A%220107463246%22%2C%22CASE_CREATED%22%3A0%2C%22PAYMENT_STATUS%22%3A0%2C%22MEDIPASS_ACTIVE%22%3Atrue%2C%22VADEMECUM_ACTIVE%22%3Afalse%2C%22MEDIPASS_PARAM%22%3A%22%22%2C%22RECEMED_ACTIVE%22%3Afalse%2C%22IMED_ACTIVE%22%3Afalse%2C%22RESEND_DOCS%22%3Atrue%2C%22VIS_RESEND_DOCS%22%3Afalse%7D%7C%7C%7B%22CHECK_LICMED%22%3A%22%22%2C%22CHECK_NOTIFGES%22%3A%22%22%2C%22CHECK_ORDCLI%22%3A%22%22%2C%22CHECK_RECMED%22%3A%22%22%2C%22CHECK_RECMAG%22%3A%22%22%2C%22CHECK_INDGYF%22%3A%22%22%2C%22CHECK_RESATENC%22%3Atrue%2C%22CHECK_CERTMED%22%3A%22%22%2C%22EMAIL%22%3A%22fabian.gomez%40bupa.cl%22%7D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(4.1)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=FINALIZAR_CONSULTA&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00177&rfcdest=&ajax_value=undefined',
    '%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%2C%22LFDBEW%22%3A%2200001%22%2C%22RESEND_DOCS%22%3Atrue%7D%7C%7C%7B%22TMNID%22%3A%220107463246%22%2C%22VC_SUCCESS%22%3Atrue%2C%22OBSERVACIONES%22%3A%22%22%2C%22OBSERVACIONES_PAC%22%3A%22%22%2C%22ACTION%22%3A%22OPEN_DOCTOR%22%2C%22CHAT_TOKEN%22%3A%22%22%2C%22VIDEO_TIME%22%3A%22000000%22%2C%22VIDEO_TIME_MAX%22%3A%22000000%22%2C%22COLGAR%22%3A%22%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(10.4)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_paciente_ambulante?ajax_id=UPDATE_STATUS_VC&sap-client=300&ajax_applid=Z_PACIENTE_AMBULANTE&uxp=400&field_id=00368&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDNR%22%3A%2200001%22%2C%22TMNDT%22%3A%2220220308%22%2C%22TMNZT%22%3A%22131500%22%2C%22ORGAU%22%3A%22IBA%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22RUT%22%3A%2218726379-4%22%2C%22PNAMEC%22%3A%22VASQUEZ%20CLIFTON%20(H%2C%2027)%22%2C%22GSCHLE%22%3A%221%22%2C%22AGEPAT%22%3A%2227%20%22%2C%22STATUS_CONS%22%3A%22RECEPCIONADO%22%2C%22KOSTR%22%3A%22%22%2C%22KSSNAM%22%3A%22Particular%22%2C%22TIEMPO_ESPERA%22%3A%220000000323%22%2C%22KTXTCONC%22%3A%22CTLM%20M%20GRAL%20AD%22%2C%22OBSERVACION%22%3A%22%22%2C%22TEXTO_MEDICO%22%3A%22%22%2C%22NOMBRE_SOCIAL%22%3A%22%22%2C%22COSTO%22%3A%220%22%2C%22STRING_RF%22%3A%22%22%2C%22PERNR%22%3A%2214584830-K%22%2C%22VISIBLE_ATENDIDO%22%3Afalse%2C%22VISIBLE_POR_ATEN%22%3Afalse%2C%22IP_CLIENT%22%3A%22%22%2C%22LFDBW%22%3A%2200001%22%2C%22URL_MED%22%3A%22https%3A%2F%2Fvideoconsultades.integramedica.cl%3A443%2F%3Fkey%3DVTJGc2RHVmtYMStZUGVEWjdwQVlLQWxxWGt6YWFXOXFibTVTR3B5ODhZZy9UMFNCQ3pFOStKTW5sQUEvOUVKYm41eWQyb25jRFM2MVlnZVdGeldwakpkNUNCeDJSZ0NPZUNEUXFreVI0Wk09%26mod%3D01%26NEGO%3DADN%22%2C%22VC_COLOR%22%3A%22%23ffcc00%22%2C%22STATUS_VC%22%3A%22%22%2C%22VC_ICON%22%3A%22sap-icon%3A%2F%2Fweb-cam%22%2C%22LINEA_NEG%22%3A%22VCO%22%2C%22STATUS_PAGO_VC%22%3A%22C%22%2C%22TMNID%22%3A%220107463246%22%2C%22ICON_COVID%22%3A%22sap-icon%3A%2F%2Fadd-document%22%2C%22ICON_COLOR%22%3A%22%230013d2%22%2C%22ISCREATED_PMD%22%3Afalse%2C%22END_CALL%22%3Afalse%2C%22LFDBEW%22%3A%2200001%22%2C%22RESEND_DOCS%22%3Atrue%7D%7C%7C%7B%22ACTION%22%3A%22CLOSE%22%2C%22TMNID%22%3A%220107463246%22%2C%22VIDEO_TIME%22%3A%22000129%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=ZBACK&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=02524&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=GET_GES&ajax_applid=ZPMD_Z_MEDCONS2&sap-client=300&uxp=400&field_id=01004&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=SAVE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00590&rfcdest=&ajax_value=undefined',
    '%7B%22ZMEDNUMEPI%22%3A%22%22%2C%22OBS_KINES1%22%3A%22%22%2C%22OBSERVACIO%22%3A%22%22%2C%22ZADULTRESP%22%3A%22%22%2C%22ZADULTRESP_X%22%3A%22%22%2C%22ZNOMADULRE%22%3A%22%22%2C%22MOTICONSUL%22%3A%22Dolor%22%2C%22EVOLUCION%22%3A%22%22%2C%22ZINDCOVID%22%3A%22%22%2C%22ZINDCOVID_X%22%3A%22%22%2C%22ZTXTTASIS%22%3A%22%22%2C%22ZTXTTADIA%22%3A%22%22%2C%22TEMPERATUR%22%3A%22%22%2C%22PULSO%22%3A%22%22%2C%22ZESCVISANA%22%3A%22%22%2C%22ZESCVISANA_X%22%3A%22%22%2C%22ZEVPANTPES%22%3A%22%22%2C%22PESO%22%3A0%2C%22FDGRAMOS%22%3A0%2C%22TALLA%22%3A0%2C%22ZCONTALLA%22%3A%22%22%2C%22IMC%22%3A%22%22%2C%22DIAGNUTRIC%22%3A%22%22%2C%22CC%22%3A%22%22%2C%22ZEVPANTEST%22%3Afalse%2C%22ZEVPANTEST_X%22%3A%22%22%2C%22ZANTPRCP_E%22%3A%22%22%2C%22ZANTPRCP_E_X%22%3A%22%22%2C%22ZANTPRCP_L%22%3A%22%22%2C%22ZANTPRCP_L_X%22%3A%22%22%2C%22ZANTPRCL_E%22%3A%22%22%2C%22ZANTPRCL_E_X%22%3A%22%22%2C%22ZEXAHEMOGL%22%3A%22%22%2C%22ZULEXAGLIC%22%3A%22%22%2C%22ZHORESTIRO%22%3A%22%22%2C%22ZTSH%22%3A%22%22%2C%22ZCOLESLDL%22%3A%22%22%2C%22ZEXFPBD%22%3A%22%22%2C%22ZEXFPBD2%22%3A%22%22%2C%22ZEXFPBI%22%3A%22%22%2C%22ZEXFPBI2%22%3A%22%22%2C%22ZEXFPCIRCU%22%3A%22%22%2C%22ZEVPANTEDM%22%3A%22000%22%2C%22CHECKPSF%22%3Afalse%2C%22CHECKPSF_X%22%3A%22%22%2C%22ZBASMEDMED%22%3A%22%22%2C%22ZBASMEDENF%22%3A%22%22%2C%22ZMORBDORIE%22%3A%22%22%2C%22ZMORBDORIE_X%22%3A%22%22%2C%22ZCHKEXFISE%22%3Afalse%2C%22ZCHKEXFISE_X%22%3A%22%22%2C%22X00EZA1%22%3A%22%22%2C%22X00LLO1%22%3A%22%22%2C%22X00AX1%22%3A%22%22%2C%22X00OMEN2%22%3A%22%22%2C%22X00REMIDA1%22%3A%22%22%2C%22X00UMNA1%22%3A%22%22%2C%22OBSERVACI6%22%3A%22%22%2C%22ANAMNACTUA%22%3A%22%22%2C%22X00PERATUR%22%3A0%2C%22X00TTASIS%22%3A0%2C%22X00TTADIA%22%3A0%2C%22X00%22%3A0%2C%22X01%22%3A%22%22%2C%22X00SO%22%3A%22%22%2C%22X01PANTPES%22%3A0%2C%22X01O%22%3A0%2C%22X00RAMOS%22%3A0%2C%22X01NTALLA%22%3A0%2C%22X00LA%22%3A0%2C%22X02%22%3A0%2C%22X00GNUTRIC%22%3A%22%22%2C%22X03%22%3A0%2C%22DOLOR%22%3A%22%22%2C%22DOLOR_X%22%3A%22%22%2C%22X01PANTEST%22%3Afalse%2C%22X01PANTEST_X%22%3A%22%22%2C%22X01TPRCP_E%22%3A%22%22%2C%22X01TPRCP_E_X%22%3A%22%22%2C%22X01TPRCP_L%22%3A%22%22%2C%22X01TPRCP_L_X%22%3A%22%22%2C%22X01TPRCL_E%22%3A%22%22%2C%22X01TPRCL_E_X%22%3A%22%22%2C%22CABEZA1%22%3A%22%22%2C%22CUELLO1%22%3A%22%22%2C%22TORAX1%22%3A%22%22%2C%22ABDOMEN2%22%3A%22%22%2C%22EXTREMIDA1%22%3A%22%22%2C%22COLUMNA1%22%3A%22%22%2C%22X00AHEMOGL%22%3A%22%22%2C%22X00EXAGLIC%22%3A%22%22%2C%22ZZTSH%22%3A%22%22%2C%22X00FPBD%22%3A0%2C%22X00FPBD2%22%3A0%2C%22X00FPBI%22%3A0%2C%22X00FPBI2%22%3A0%2C%22X00FPCIRCU%22%3A0%2C%22TXINDCLINI%22%3A%22%22%2C%22ZINDPAP%22%3A%22%22%2C%22ZINDPAP_X%22%3A%22%22%2C%22ZINDQUI%22%3A%22%22%2C%22ZINDQUI_X%22%3A%22%22%2C%22ZINTERVEN%22%3A%22%22%2C%22ZINTERVEN_X%22%3A%22%22%2C%22LICSINO%22%3A%22NO%22%2C%22LICSINO_X%22%3A%22%22%2C%22X00IGO%22%3A%22%22%2C%22X01CRIPCIO%22%3A%22%22%2C%22X01HA%22%3A%22%22%2C%22NUMDIASLIC%22%3A0%2C%22UNIORGCITA%22%3A%22%22%2C%22FECHACITA%22%3A%22%22%2C%22HORACITA%22%3A%22000000%22%2C%22FDBORGRUPO%22%3A%22%22%2C%22COMPRINDIC%22%3Afalse%2C%22COMPRINDIC_X%22%3A%22%22%2C%22FDCODNOMED%22%3A%22%22%2C%22LBNOMBMEDI%22%3A%22%22%2C%22TXCODPPIOA%22%3A%22%22%2C%22FDCODPPIOA%22%3A%22%22%2C%22LBPPIOACTI%22%3A%22%22%2C%22TXCODGRTER%22%3A%22%22%2C%22FDCODGRTER%22%3A%22%22%2C%22LBGPOTERAP%22%3A%22%22%2C%22TXCODSGTER%22%3A%22%22%2C%22FDCODSGTER%22%3A%22%22%2C%22LBSUBGPTER%22%3A%22%22%2C%22FDCODLABOR%22%3A%22%22%2C%22TXLABORATO%22%3A%22%22%2C%22LBLABORATO%22%3A%22%22%2C%22TXPRESENTA%22%3A%22%22%2C%22TXCOMPOSIC%22%3A%22%22%2C%22TXDESCRIPC%22%3A%22%22%2C%22TXPOSOLOGI%22%3A%22%22%2C%22TXMODEMPLE%22%3A%22%22%2C%22RBCARAMEDI%22%3A%22%22%2C%22RBCARAMEDI_X%22%3A%22%22%2C%22TXPROPIEDA%22%3A%22%22%2C%22TXCERTMEDI%22%3A%22%22%2C%22MAILCERTME%22%3Afalse%2C%22MAILCERTME_X%22%3A%22%22%2C%22FIRMCERTME%22%3Afalse%2C%22FIRMCERTME_X%22%3A%22%22%2C%22TXFORMAS%22%3A%22%22%2C%22FORMAS%22%3A%22%22%2C%22TXTIPANTIB%22%3A%22%22%2C%22TIPOANTIBI%22%3A%22%22%2C%22FDCODFORMA%22%3A%22%22%2C%22TXNOMBME%22%3A%22%22%2C%22X00SPECTO%22%3A%220000000000%22%2C%22FDCODTIPOA%22%3A%22%22%2C%22IMPENBLANC%22%3Afalse%2C%22IMPENBLANC_X%22%3A%22%22%2C%22FECHARECET%22%3A%22%22%2C%22VADEMECUMC%22%3Afalse%2C%22VADEMECUMC_X%22%3A%22%22%2C%22FDAGRGRUPO%22%3A%22%22%2C%22FDBODGRUPO%22%3A%22%22%2C%22X01ORGRUPO%22%3A%22%22%2C%22ZPRMEDMAGI%22%3Afalse%2C%22ZPRMEDMAGI_X%22%3A%22%22%2C%22X00OMBMEDI%22%3A%22%22%2C%22X00PIOACTI%22%3A%22%22%2C%22ZTXTRECMAG%22%3A%22%22%2C%22X00HARECET%22%3A%22%22%2C%22X00ENBLANC%22%3Afalse%2C%22X00ENBLANC_X%22%3A%22%22%2C%22X01ERVACIO%22%3A%22%22%2C%22ZOBSERVAMP%22%3A%22%22%2C%22NOMBREPACI%22%3A%22VASQUEZ%20VASQUEZ%20CLIFTON%22%2C%22FONO%22%3A%2222224754%22%2C%22SEXO%22%3A%22Masculino%22%2C%22SEXO_X%22%3A%22%22%2C%22RUT%22%3A%2218726379-4%22%2C%22X01D%22%3A27%2C%22EDADMES%22%3A11%2C%22EDADIA%22%3A17%2C%22PREVISION%22%3A%22Particular%22%2C%22TIPOPLAN%22%3A%22%22%2C%22PROGRAMA%22%3A%22C.TLM%20MED%22%2C%22X03HA%22%3A%2220220308%22%2C%22X02A%22%3A%22163856%22%2C%22NOMBREMEDI%22%3A%22%22%2C%22ESPECDERIV%22%3A%22%22%2C%22CENTROSANI%22%3A%22%22%2C%22X02BREPROF%22%3A%22ABESADA%20LOBAINA%20RAFAEL%22%2C%22ESPECPROF%22%3A%22TELE%20MEDICINA%20GENERAL%22%2C%22CHCONSBASI%22%3Afalse%2C%22CHCONSBASI_X%22%3A%22%22%2C%22CHCONSAMPL%22%3Afalse%2C%22CHCONSAMPL_X%22%3A%22%22%2C%22ABDOMEN1%22%3A%22%22%2C%22ZISHOME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME_ANU%22%3A%22%22%2C%22URL_LME_AN%22%3A%22%22%2C%22EMED_ENABLE%22%3Atrue%2C%22RUT_RESPONSABLE%22%3A%22%22%7D%7C%7C%5B%7B%22FECHA%22%3A%22%22%2C%22HORA%22%3A%22000000%22%2C%22ZLFDNR%22%3A%22000%22%2C%22CODIGODIAG%22%3A%22R52.0%22%2C%22DESCRIPCIO%22%3A%22dolor%20agudo%22%2C%22TIPODIAG%22%3A%22%22%2C%22TIPODIAG_X%22%3A%22%22%2C%22UBICACION%22%3A%22%22%2C%22UBICACION_X%22%3A%22%22%2C%22ZDEFIMEDCO%22%3A%22%22%2C%22ZDEFIMEDCO_X%22%3A%22%22%2C%22DIAGNOBSER%22%3A%22%22%2C%22DIAGURGDEF%22%3A%22%22%2C%22DIAGURGDEF_X%22%3A%22%22%2C%22X00ERVACIO%22%3A%22%22%2C%22NOMBREPROF%22%3A%22%22%2C%22STATUSNOTI%22%3A%22%22%2C%22ZBOR%22%3Afalse%2C%22ZBOR_X%22%3A%22No%22%2C%22ZGNOSTIING%22%3Afalse%2C%22ZGNOSTIING_X%22%3A%22No%22%2C%22ZGNOSTIPRO%22%3Afalse%2C%22ZGNOSTIPRO_X%22%3A%22No%22%2C%22ZGNOSTIPTO%22%3Afalse%2C%22ZGNOSTIPTO_X%22%3A%22No%22%2C%22ZGNOSTIALT%22%3Afalse%2C%22ZGNOSTIALT_X%22%3A%22No%22%2C%22ZGNOSTIFAL%22%3Afalse%2C%22ZGNOSTIFAL_X%22%3A%22No%22%2C%22X01TRESPO%22%3A%22%22%2C%22ZESPECIALI%22%3A%22%22%2C%22ZTXTVMA%22%3A%22%22%2C%22ZMEDNOTQX%22%3Afalse%2C%22ZMEDNOTQX_X%22%3A%22No%22%2C%22X00IMESTAM%22%3A0%7D%5D%7C%7C%7B%22ALIAS%22%3A%22%22%2C%22FUNCTION%22%3A%22%22%2C%22TAB_ALIAS%22%3A%22%22%2C%22LINE%22%3A0%7D%7C%7C%7B%22ACTIVE%22%3Atrue%2C%22CHANGES%22%3Afalse%2C%22NEXT_STATUS%22%3A%22%22%2C%22ALLOW_SET_STATUS%22%3Atrue%2C%22ALLOW_RELEASE%22%3Atrue%2C%22CLOSE_SESSION_AT_ERROR%22%3Afalse%2C%22ZCLOSE_SESSION%22%3A%22%22%2C%22ZZ_MEDANTMORB_VERS%22%3A%22000%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGID%22%3A%22IBARPVC1%22%2C%22LFDBEW%22%3A%2200001%22%7D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%5B%5D%7C%7C%7B%22CODIGODIAG1%22%3A%22%22%2C%22DESCRIPCIO1%22%3A%22%22%2C%22CODIGODIAG2%22%3A%22%22%2C%22DESCRIPCIO2%22%3A%22%22%2C%22CODIGODIAG3%22%3A%22%22%2C%22DESCRIPCIO3%22%3A%22%22%2C%22URL_LME%22%3A%22%22%2C%22ID_LME%22%3A%22%22%2C%22URL_LME_ANUL%22%3A%22%22%2C%22ID_LME_ANUL%22%3A%22%22%7D%7C%7C%5B%5D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  sleep(3.2)

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=CLOSE_PMD&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=00591&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_PAT_LIST&ajax_applid=Z_CITACION_AMBU&sap-client=300&uxp=400&field_id=00011&rfcdest=&ajax_value=undefined',
    '%7B%22DATEFROM%22%3A%2220220308%22%2C%22DATETO%22%3A%22%22%7D%7C%7C%7B%22EINRI%22%3A%22RED%22%2C%22ORGAU%22%3A%22IBA%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=GET_PAT_LIST_NUM&sap-client=300&ajax_applid=Z_CITACION_AMBU&uxp=400&field_id=00480&rfcdest=&ajax_value=undefined',
    '%7B%22EINRI%22%3A%22RED%22%2C%22ORGAU%22%3A%22IBA%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/z_citacion_ambu?ajax_id=REPOSITORIO&sap-client=300&ajax_applid=Z_CITACION_AMBU&uxp=400&field_id=00562&rfcdest=&ajax_value=undefined',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=DELETE_NDOC&sap-client=300&ajax_applid=ZPMD_Z_MEDCONS2&uxp=400&field_id=02504&rfcdest=&ajax_value=undefined',
    '%7B%22DOKAR%22%3A%22DMI%22%2C%22DOKNR%22%3A%220000060000000000090715624%22%2C%22DOKVR%22%3A%2200%22%2C%22DOKTL%22%3A%22000%22%2C%22LFDDOK%22%3A0%2C%22ORGFORM%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22PATNR%22%3A%220014024887%22%2C%22FALNR%22%3A%220078604346%22%2C%22FALAR%22%3A%22%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22ORGPF%22%3A%22IBARPVC1%22%2C%22ORGLE%22%3A%22%22%2C%22ORGLA%22%3A%22%22%2C%22ANFID%22%3A%2200000000%22%2C%22ORGDO%22%3A%22IBATMEGR%22%2C%22LEIST%22%3A%22%22%2C%22LNRLS%22%3A%22%22%2C%22LFDBEW%22%3A%2200001%22%2C%22MITARB%22%3A%2214584830-K%22%2C%22STORN%22%3Afalse%2C%22STUSR%22%3A%22%22%2C%22STDAT%22%3A%22%22%2C%22DTID%22%3A%22MEDCONS2%22%2C%22DTVERS%22%3A%22001%22%2C%22BERST%22%3A%220%22%2C%22BEZEB%22%3A%22F%22%2C%22MEDOK%22%3Atrue%2C%22PCODE%22%3A%22%22%2C%22DODAT%22%3A%2220220308%22%2C%22DOTIM%22%3A%22163856%22%2C%22ERUSR%22%3A%22PS_MD006%22%2C%22ERDAT%22%3A%2220220308%22%2C%22ERTIM%22%3A%22163856%22%2C%22UPUSR%22%3A%22PS_MD006%22%2C%22UPDAT%22%3A%2220220308%22%2C%22UPTIM%22%3A%22163856%22%2C%22LOEKZ%22%3Afalse%2C%22LOUSR%22%3A%22%22%2C%22LODAT%22%3A%22%22%2C%22LOTIM%22%3A%22000000%22%2C%22STORELOC%22%3A%22%22%2C%22STORELOC2%22%3A%22%22%2C%22ARCHIV%22%3A%22%22%2C%22STANDORT%22%3A%22%22%2C%22ROLLNO%22%3A%22%22%2C%22MICROF%22%3Afalse%2C%22EXTNR%22%3A%22%22%2C%22INFOMR%22%3A%22%22%2C%22TEMPMR%22%3Afalse%2C%22ALBUM%22%3A%22%22%2C%22MFYEAR%22%3A%220000%22%2C%22REDO_TYPE%22%3A%22%22%2C%22REDO_KZ%22%3Afalse%2C%22CASE_ARCHIVED%22%3Afalse%2C%22EXTERN%22%3A%22%22%7D%7C%7C%7B%22PATNR%22%3A%220014024887%22%2C%22PAPID%22%3A%22%22%2C%22EINRI%22%3A%22RED%22%2C%22FALNR%22%3A%220078604346%22%2C%22LFDBEW%22%3A%2200001%22%2C%22ORGID%22%3A%22IBATMEGR%22%2C%22ORGFA%22%3A%22IBATMEGR%22%2C%22APPLID_ORIG%22%3A%22%22%2C%22FILTER_CASE%22%3Afalse%2C%22ZZ_FILTER_DATE%22%3A%22%22%2C%22ZBB_OC_EMED%22%3A%22%22%2C%22ORGPF%22%3A%22%22%2C%22KSSNAM%22%3A%22%22%7D',
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=neptune-clear-session&sap-sessioncmd=cancel',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )

  response = http.post(
    'https://mascara-fceqas.bupa.cl:8443/neptune/webapp/zpmd_z_medcons2?ajax_id=neptune-clear-session&sap-sessioncmd=cancel',
    null,
    {
      headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'content-type': 'application/json',
        accept: 'application/json, text/javascript, */*; q=0.01',
        'sap-language': 'ES',
        'x-requested-with': 'XMLHttpRequest',
        neptunelaunchpad: 'INTEGRAMEDICA2',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://mascara-fceqas.bupa.cl:8443',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9',
      },
    }
  )
  
  //console.log(response01.body);  
  //console.log(response01.status)
 // console.log(response01.body)
  

  //group(
   // 'page_1 - https://mascara-fceqas.bupa.cl:8443/neptune/webapp/?launchpad=integramedica2&sap_client=300&sap_language=ES&sap-client=300&sap-language=ES',
   // function () {
  //    response 
     // console.log(response001.status)
      //console.log(response001)

      
    //  sleep(1.1)

   //  console.log(response.response)  

  
}
