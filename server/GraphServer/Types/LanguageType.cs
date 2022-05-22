using GraphServer.Models;
using HotChocolate.Types;

namespace GraphServer.Types;

public class LanguageType : ObjectType<Language>
{
    protected override void Configure(IObjectTypeDescriptor<Language> descriptor)
    {
        descriptor.Field(t => t.Id)
            .Type<NonNullType<IdType>>();

        descriptor.Field(t => t.LanguageCode)
            .Type<NonNullType<StringType>>();

        descriptor.Field(t => t.Localizations)
            .UsePaging<LocalizationType>();
    }
}