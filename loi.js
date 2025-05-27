
function generateLOI() {
    const fields = {
        industry: document.getElementById('industry').value,
        fallback: document.getElementById('fallback').value,
        zone: document.getElementById('zone').value,
        startDate: document.getElementById('startDate').value,
        organization: document.getElementById('organization').value,
        signatory: document.getElementById('signatory').value,
        title: document.getElementById('title').value,
        email: document.getElementById('email').value
    };

    const result = `
    <h3>Your LOI is Ready</h3>
    <p><strong>Organization:</strong> ${fields.organization}<br/>
    <strong>Signatory:</strong> ${fields.signatory} (${fields.title})<br/>
    <strong>Email:</strong> ${fields.email}<br/>
    <strong>Industry:</strong> ${fields.industry}<br/>
    <strong>Fallback Type:</strong> ${fields.fallback}<br/>
    <strong>Zone:</strong> ${fields.zone}<br/>
    <strong>Start Date:</strong> ${fields.startDate}</p>
    <p>To proceed: <strong>Screenshot or copy</strong> this and send to <code>pilot@solace.ai</code> or <strong>paste into our PDF template</strong>.</p>
    `;

    document.getElementById('loiResult').innerHTML = result;
}
