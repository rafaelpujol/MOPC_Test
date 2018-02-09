using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOPC.DAL
{
    public class Registro
    {
        [Key]
        public long Id { get; set; }

        [MaxLength(13)]
        public string Cedula { get; set; }

        [MaxLength(150)]
        public string Nombre { get; set; }
        [MaxLength(100)]
        public string Email { get; set; }

        [MaxLength(15)]
        public string Telefono { get; set; }

        [MaxLength(100)]
        public string Provincia { get; set; }
        
        [MaxLength(15)]
        public string Municipio { get; set; }

        public bool RepresentaInstitucion { get; set; }
        [MaxLength(15)]
        public string RNC { get; set; }
        [MaxLength(150)]
        public string RazonSocial { get; set; }
        [MaxLength(100)]
        public string  PosicionCargo {get; set;}

        public string Cometario { get; set; }

        public byte[] FileData { get; set; }
        [MaxLength(15)]
        public string ContentType { get; set; }
    }
}
