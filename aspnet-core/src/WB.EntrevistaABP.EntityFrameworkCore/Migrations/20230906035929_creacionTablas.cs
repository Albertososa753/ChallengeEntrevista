using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WB.EntrevistaABP.Migrations
{
    /// <inheritdoc />
    public partial class creacionTablas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppPassengers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Surname = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    DNI = table.Column<int>(type: "integer", nullable: false),
                    DateBirth = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    ExtraProperties = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppPassengers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppTravels",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FechaSalida = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    FechaLlegada = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    Origen = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    Destino = table.Column<string>(type: "character varying(128)", maxLength: 128, nullable: false),
                    MedioTransporte = table.Column<int>(type: "integer", nullable: false),
                    ExtraProperties = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTravels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppViajePasajero",
                columns: table => new
                {
                    IdPasajero = table.Column<Guid>(type: "uuid", nullable: false),
                    IdViaje = table.Column<Guid>(type: "uuid", nullable: false),
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    ExtraProperties = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uuid", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp without time zone", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppViajePasajero", x => new { x.IdViaje, x.IdPasajero });
                    table.ForeignKey(
                        name: "FK_AppViajePasajero_AppPassengers_IdPasajero",
                        column: x => x.IdPasajero,
                        principalTable: "AppPassengers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppViajePasajero_AppTravels_IdViaje",
                        column: x => x.IdViaje,
                        principalTable: "AppTravels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PassengerTravel",
                columns: table => new
                {
                    PassengersId = table.Column<Guid>(type: "uuid", nullable: false),
                    travelsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassengerTravel", x => new { x.PassengersId, x.travelsId });
                    table.ForeignKey(
                        name: "FK_PassengerTravel_AppPassengers_PassengersId",
                        column: x => x.PassengersId,
                        principalTable: "AppPassengers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PassengerTravel_AppTravels_travelsId",
                        column: x => x.travelsId,
                        principalTable: "AppTravels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppViajePasajero_IdPasajero",
                table: "AppViajePasajero",
                column: "IdPasajero");

            migrationBuilder.CreateIndex(
                name: "IX_AppViajePasajero_IdViaje_IdPasajero",
                table: "AppViajePasajero",
                columns: new[] { "IdViaje", "IdPasajero" });

            migrationBuilder.CreateIndex(
                name: "IX_PassengerTravel_travelsId",
                table: "PassengerTravel",
                column: "travelsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppViajePasajero");

            migrationBuilder.DropTable(
                name: "PassengerTravel");

            migrationBuilder.DropTable(
                name: "AppPassengers");

            migrationBuilder.DropTable(
                name: "AppTravels");
        }
    }
}
