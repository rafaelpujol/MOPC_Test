using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MOPC.DAL.Migrations
{
    public partial class initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Registro",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cedula = table.Column<string>(maxLength: 13, nullable: true),
                    Cometario = table.Column<string>(nullable: true),
                    ContentType = table.Column<string>(maxLength: 15, nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    FileData = table.Column<byte[]>(nullable: true),
                    Municipio = table.Column<string>(maxLength: 15, nullable: true),
                    Nombre = table.Column<string>(maxLength: 150, nullable: true),
                    PosicionCargo = table.Column<string>(maxLength: 100, nullable: true),
                    Provincia = table.Column<string>(maxLength: 100, nullable: true),
                    RNC = table.Column<string>(maxLength: 15, nullable: true),
                    RazonSocial = table.Column<string>(maxLength: 150, nullable: true),
                    RepresentaInstitucion = table.Column<bool>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registro", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Registro");
        }
    }
}
