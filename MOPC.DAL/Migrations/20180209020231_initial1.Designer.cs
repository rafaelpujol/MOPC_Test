﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using MOPC.DAL;
using System;

namespace MOPC.DAL.Migrations
{
    [DbContext(typeof(MopcDbContext))]
    [Migration("20180209020231_initial1")]
    partial class initial1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MOPC.DAL.Registro", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cedula")
                        .HasMaxLength(13);

                    b.Property<string>("Cometario");

                    b.Property<string>("ContentType")
                        .HasMaxLength(15);

                    b.Property<string>("Email")
                        .HasMaxLength(100);

                    b.Property<byte[]>("FileData");

                    b.Property<string>("Municipio")
                        .HasMaxLength(15);

                    b.Property<string>("Nombre")
                        .HasMaxLength(150);

                    b.Property<string>("PosicionCargo")
                        .HasMaxLength(100);

                    b.Property<string>("Provincia")
                        .HasMaxLength(100);

                    b.Property<string>("RNC")
                        .HasMaxLength(15);

                    b.Property<string>("RazonSocial")
                        .HasMaxLength(150);

                    b.Property<bool>("RepresentaInstitucion");

                    b.Property<string>("Telefono")
                        .HasMaxLength(15);

                    b.HasKey("Id");

                    b.ToTable("Registro");
                });
#pragma warning restore 612, 618
        }
    }
}