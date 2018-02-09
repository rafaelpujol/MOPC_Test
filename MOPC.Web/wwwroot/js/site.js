function CargarProvincias() {
    var r = JSON.parse(provincias),
        i = r.Provincias,
        n = "<option><\/option>",
        t;
    i.forEach(function (t) {
        n += "<option value='" + t.Provincia + "'>";
        n += t.Provincia;
        n += "<\/option>"
    }, this);
    t = document.getElementById("Provincia");
    t.innerHTML = n;
    t.onchange = function () {
        var r = t.value,
            u;
        r !== "" ? (u = i.filter(function (n) {
            return n.Provincia === r
        })[0].Municipios, n = "<option><\/option>", u.forEach(function (t) {
            n += "<option value='" + t + "'>";
            n += t;
            n += "<\/option>"
            }, this), document.getElementById("Municipio").innerHTML = n) : document.getElementById("Municipio").innerHTML = ""
    }
}

function PersistirGuid() {
    var n = localStorage.getItem("guid");
    n === null && (n = GUID());
    localStorage.setItem("guid", n)
}

function ValidarSiEsEmpresa() {
    var n = JSON.parse(localStorage.getItem("esempresa"));
    document.getElementById("esempresa").checked = n
}

function ValidarCedula() {
    var n = document.getElementById("Cedula").value,
        t;
    n.length >= 11 ? (t = "http://app.mopc.gob.do/Utilitario/api/identidad/ceduladoexiste?cedula=" + n + "&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7", BuscarObjeto(t, function (n) {
        if (n.Success) {
            var t = JSON.parse(n.ResponseText);
            t ? (document.getElementById("Cedula").style.borderColor = "green", CedulaValida = !0) : (document.getElementById("cedula").style.borderColor = "red", CedulaValida = !1)
        }
    })) : (document.getElementById("Cedula").style.borderColor = "red", CedulaValida = !1)
}

function CargarEventos() {
    function n(n) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
    }
    document.getElementById("Cedula").onblur = function () {
        ValidarCedula()
    };
    document.getElementById("RepresentaInstitucion").onclick = function () {
        ToggleEmpresa()
    };
    document.getElementById("RepresentaInstitucion").checked && (document.getElementById("rnc").onblur = function () {
        BuscarDatosRNC()
    });
   
}

function BuscarDatosRNC() {
    function n(n) {
        n === "error" && (i.style.borderColor = "red", t.style.borderColor = "red");
        n === "exito" && (i.style.borderColor = "green", t.style.borderColor = "green")
    }
    var i = document.getElementById("RNC"),
        f = i.value,
        r = f.replace(/\D/g, ""),
        t = document.getElementById("RazonSocial"),
        u;
    r.length >= 9 ? (u = "http://app.mopc.gob.do/Utilitario/api/rnc/buscarrnc?RNC=" + r + "&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7", BuscarObjeto(u, function (i) {
        if (i.Success) {
            if (JSON.parse(i.ResponseText) === null) {
                t.value = "Razón Social no encontrada.";
                n("error");
                RNCValido = !1;
                return
            }
            var r = JSON.parse(i.ResponseText);
            r.RazonSocial.length > 0 ? (t.value = r.RazonSocial, n("exito"), RNCValido = !0) : r.Nombre.length > 0 ? (t.value = r.Nombre, n("exito"), RNCValido = !0) : (n("error"), RNCValido = !1)
        } else n("error"), RNCValido = !1
    })) : (n("error"), RNCValido = !1)
}

function ToggleEmpresa() {
    var n = document.getElementById("RepresentaInstitucion").checked;
    n ? (document.getElementById("datosinstitucion").innerHTML = seccionDatosInstitucion, document.getElementById("RNC").onblur = function () {
        BuscarDatosRNC()
    }) : document.getElementById("datosinstitucion").innerHTML = "";
    localStorage.setItem("RepresentaInstitucion", JSON.stringify(document.getElementById("RepresentaInstitucion").checked))
}
var CedulaValida = !1,
    RNCValido = !1,
    version = "uno punto dos",
    seccionDatosInstitucion, GUID;
document.addEventListener("DOMContentLoaded", function () {
    CargarProvincias();
    CargarEventos();
    ValidarSiEsEmpresa();
    ToggleEmpresa();
    ValidarSiEsEmpresa();
    PersistirGuid();
}, !1);
seccionDatosInstitucion = '<div class="col-lg-3 col-md-3 col-sm-3"><label for="rnc">RNC*<\/label><input class="form-control" asp-for="RNC" type="text" placeholder="Registro Nacional de Contribuyentes"><\/div><div class="col-lg-5 col-md-5 col-sm-5"><label for="razonsocial">Nombre/Razón Social*<\/label><input class="form-control" asp-for="RazonSocial" type="text" placeholder="Razón Social" readonly><\/div><div class="col-lg-4 col-md-4 col-sm-4"><label for="posicion">Posición o Cargo*<\/label><input class="form-control" asp-for="PosicionCargo"  type="text" placeholder="Cargo que desempeña"><\/div>';
GUID = function () {
    function n() {
        do var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
            var t = Math.random() * 16 | 0,
                i = n == "x" ? t : t & 3 | 8;
            return i.toString(16)
        }); while (!n.register(t));
        return t
    }
    return n.create = function () {
        return n()
    }, n.version = "1.2.0", n.list = [], n.exists = function (t) {
        return n.list.indexOf(t) > -1
    }, n.register = function (t) {
        return n.exists(t) ? !1 : (n.list.push(t), !0)
    }, n
}();
