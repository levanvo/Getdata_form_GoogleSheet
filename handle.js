import { GoogleSpreadsheet } from 'google-spreadsheet';
import axios from "axios";
import { google } from "googleapis";



export const go_3 = async (req, res) => {
    const codeAuthor = {
        "type": "service_account",
        "project_id": "adept-amp-395913",
        "private_key_id": "6c8e060ee99b7b965cb2636a2293ca255bc0b126",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4AdwvAbW4gs5f\nqHmuQ/zV1Uv7OitbvA/XVTL7MYiA2GpeLPzhreIqMs6e4IMrlO2+o1k3MMRK/S2b\nEJhH5l9RGxYj9pD5bChFTkFEQWAVQFPSMV5Z38Dz9OwaSg5WTInFVbyn+Qmd1OvD\nw9lS1cZii8qG50YkOFIfODCzwan6LPvxnfi6I9sE+0t/uZXW0yUCtbJzKKcw1YwO\nMmMOLUyF0oK3327CbI0/EXlWfObAJgFcGNJFjgVS2p38H54AiLZwofNF2tAR/QAa\nHb5WPQ4EovC0zf3dRhAlmiSfgQLStg1Tg9xGm0XljHHwsmM0c5XtTloASNdEf1wb\nX+GaFng/AgMBAAECggEABqyCmO3d8nBEHfIVX721iOfwlo8YjX43sN61N6knQ00W\nJo5JKcJNxqwLFHYeK9F+AgEYtki9hd7C7bHfZBQ19tIdrnY98d37Y/Afq+MXIg4w\nPBpwSqAz9mU2vwlalcS25oJiklEVCTV0y6fp1PhN9rsNQHFY+O1WBS3bjlmC2cEC\nHOLFhY4nF1fxgHroejsc1dmAPmYw8NqS7eHGQBcBesSrqJL4rbtR9N9S60eITCGz\nEGQTiT/acRkbY57wOgUkfLFlHXYq83DOUBVpu6lkuJgaSeFqVZT6odSDO01AUNm6\nejY3xGk/rtuUO9BXDCa0zv7AidqPDytbyHZ1BFKlaQKBgQDvI6iOQl7jvguDUSls\nDEFToY5PBt+5KUUWgjbF/lhFZ7wr9r2Y4qRmYCyU2HTKr0nTKS+pf7uzoH77hDXp\nV5zGnAuiaEcKeXv4SAkoGvYtSriArcuMbyVbJyd2xqTiePIBBKtLqy4ml5uQ5K+L\n2gohcUdeVFnoExkLK5vKP03jAwKBgQDE+xjODdQwhPepHnjMFBB26qYjyKTCn0Gl\no5nPDHdEvt2JIY/77H2M1zegr08g8s/9SzxPglw08kWckwSKA/66wKz0C20r2BKO\n4wTGXWdclMdXJpjgCYDb5MzQ+hY3mkXKL/gfdKcpaqsUl6J3O6L4cpjbgxrig4di\ngr+7S73zFQKBgFQ6YATzNY7LgiyXapqG2n+FWKVXC3ehJJdf98DW6+pONkXZ2z+9\nHCB+4VTvxHsbMEpyqDnwJoGHFxKpp39vf2Wo0qQ6TENRNKvnW2pHzMt5FPElxZrK\nDwNDEDBSmQK3jK11Iow9V7z6Cy4GjhoZCxZqWrPLy/rktx5rFq0ujNVXAoGANF7N\n6Xqjv4KalcwUMa3j8rnQEhN2Oog829zzN6kIzK4yGBNkRIZLmvZdQ8tYLlpgEee+\n0STHfwwqlcZAnrEROHWhhgDDtbRsurCAxHxwzpx/oxwP6QCd0diy25yh64aIp4i5\nXyOUjd5ePctS1oB0g7l0CmiA7Vgq1nYMo68vgUECgYAPIw4zzUgtLntr6V9Apji+\nw9400/AszP3dRZVbq/EuqcaF375ekD5co5SdWawHIMgWlwhd4EWaIg0i0Uu6Bz4o\nC4DDsRb+GHfOgad8ezyITV2tMcoH4woy11Ja8EwzmsUMuGvKURtTglZVYv6l28+k\nj1B8V09O3M6u2rARWE9oYg==\n-----END PRIVATE KEY-----\n",
        "client_email": "vole-858@adept-amp-395913.iam.gserviceaccount.com",
        "client_id": "100650637673166830921",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vole-858%40adept-amp-395913.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }
    

    const spreadsheetId = `1JIR1hxYKgzEfK-itHIgF5TAkTePGpPF9M_Ux72gNHzA`;
    // Thay đổi URL thành URL thực tế trả về tệp JSON chứa thông tin xác thực
    // const authDataResponse = await axios.get('http://localhost:3000/web');
    // const authData = authDataResponse.data;
    const auth = new google.auth.GoogleAuth({
        credentials: codeAuthor,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    const client = await auth.getClient();
    // const sheets = google.sheets('v4');
    const sheets = google.sheets({
        version: 'v4',
        auth: client, // Đối tượng client bạn đã tạo trước đó
    });
    const response = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId,
        range: 'Sheet1',
    });
   
    const rows = response.data.values;
    if (rows.length) {
        console.log('Dữ liệu:');
        rows.forEach(row => {
            console.log(row);
        });
    } else {
        console.log('Không có dữ liệu.');
    }
};